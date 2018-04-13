var db = require('../db');
var apiResult = require('../utils/apiResult');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const filter = require('../utils/filter');
const async = require('async');

var express=require('express');
var multer=require('multer');
var path=require('path');
var fs=require('fs');
// 设置上传目录
var uploadpath=path.join(path.resolve(__dirname,'../'),'temp');
var upload=multer({ dest: uploadpath});

module.exports={
    reg(app){
        // 注册账户
        app.get('/qreg',(req,res)=>{
            let username = req.query.username;
            let password = req.query.password;
            let pass_secret = crypto.createHash('md5').update(password).digest('hex');
            var sql = `insert into user(username,password,nickname) values ('${username}','${pass_secret}','花花${username}')`;
            db.DBHelper.compile(sql,(result)=>{
                res.send(apiResult(true,result));
            })
        })
        // 判断手机号是否注册
        app.get('/qcz',(req,res)=>{
            let username = req.query.username;
            let sql=`select * from user where username=${username}`;
            db.DBHelper.compile(sql,(result)=>{
                res.send(apiResult(true,result));
            })
        })
         // 查找收藏id
        app.get('/qcollect',filter,(req,res)=>{
            let id = req.query.userid;
            let sql=`select * from collect where userid=${id}`;
            db.DBHelper.compile(sql,(result)=>{
                if(result.length>0){
                    async.map(result,function(item,cb){
                        var productid = item.productid;
                        var sql2 = `select * from goods where id=${productid}`;
                        db.DBHelper.compile(sql2,result2=>{
                            item['goodMsg']=result2[0];
                            cb(null,item)
                        })
                    },function(err,Result){
                        res.send(apiResult(Result.length>0,Result));
                    })
                }else{
                    res.send(false);
                }
            })
        })
        // 取消收藏
        app.post('/qnocollect',(req,res)=>{
            let id = req.body.id;
            var sql = 'delete from collect where id='+id;
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
        // 登录和用户名是否存在验证
        app.get('/qlogin',(req,res)=>{
            let username = req.query.username;
            let password = req.query.password;
            var sql = `select * from user where username='${username}'`
            if(username && !password){ // 用户名是否存在验证
                db.DBHelper.compile(sql,result=>{
                    res.send(apiResult(result && result.length>0))
                })
            }else if(username && password){
                password = crypto.createHash('md5').update(password).digest('hex');
                sql += ` and password='${password}';`
                db.DBHelper.compile(sql,result=>{
                    let token = '';
                    let user = {username};
                    if(result.length>0){
                        token=jwt.sign(user,'secret',{expiresIn: "7d"});
                        res.send(apiResult(true,{token,id:result[0]['id']}));
                    }else{
                        res.send(apiResult(false));
                    }
                })
            }
        })
        // 获取用户信息
        app.get('/qusermsg',(req,res)=>{
            let id = req.query.id;
            let sql = `select * from user where id=${id}`
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
        // 获取聊天窗口
        app.get('/qgetchat',(req,res)=>{
            let sql = 'select * from addresslist'
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
        // 修改头像（文件上传）接口
        app.post('/quploadhead',upload.single('head'),(req,res)=>{
            var file=req.file;
            fs.rename(file.path,file.path+file.originalname);
            var headImg = "temp/"+file.filename+file.originalname;
            res.send(apiResult(true,headImg))
        })
        // 修改密码判定
        app.post('/qPsssid',(req,res)=>{
            let id = req.body.id;
            let password = req.body.password;
            password = crypto.createHash('md5').update(password).digest('hex');
            var sql = `select * from user where id=${id} and password='${password}'`
            db.DBHelper.compile(sql,result=>{
                if(result.length>0){
                    res.send(apiResult(true));
                }else{
                    res.send(apiResult(false));
                }
            })
        })
        // 修改密码
        app.post('/qPsss',(req,res)=>{
            let id = req.body.id;
            let newpass = req.body.newpass;
            newpass = crypto.createHash('md5').update(newpass).digest('hex');
            var sql = `select * from user where id=${id}`
            db.DBHelper.compile(sql,result=>{
                if(result.length>0){
                    var sql2 = `update user set password='${newpass}' where id=${id}`
                    db.DBHelper.compile(sql2,result2=>{
                        res.send(apiResult(true));
                    })
                }else{
                    res.send(apiResult(false));
                }
            })
        })
        // 获取全部订单
        app.post('/qallorder',(req,res)=>{
            let id = req.body.id;
            var sql = "select * from orders where userid=" + id + " and status=1"
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
        // 获取代付款订单
        app.post('/qpayorder',(req,res)=>{
            let id = req.body.id;
            var sql = "select * from orders where userid=" + id + " and status=0"
            db.DBHelper.compile(sql,result=>{
                if(result.length>0){
                    async.map(result,function(item,cb){
                        var consigid = item.consigid;
                        var sql2 = `select * from consigmsg where id=${consigid}`;
                        db.DBHelper.compile(sql2,result2=>{
                            item['consigMsg']=result2[0];
                            cb(null,item)
                        })
                    },function(err,Result){
                        res.send(apiResult(Result.length>0,Result));
                    })
                }else{
                    res.send(false);
                }
            })
        })
        // 获取订单商品
        app.post('/qordergoods',(req,res)=>{
            let id = req.body.id;
            var sql = `select * from goods where id in(${id})`
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
        // 支付订单
        app.post('/qpay',(req,res)=>{
            let id = req.body.id;
            var sql = 'update orders set status=1 where id='+id;
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
        // 取消订单
        app.post('/qnopay',(req,res)=>{
            let id = req.body.id;
            var sql = 'delete from orders where id='+id;
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
         // 获取订单商品
        app.post('/qaddress',(req,res)=>{
            let id = req.body.id;
            var sql = `select * from consigmsg where userid=${id}`
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
        // 删除地址
        app.post('/qdeladdress',(req,res)=>{
            let id = req.body.id;
            let name = req.body.name;
            var sql = `delete from consigmsg where userid=${id} and consigName='${name}'`;
            console.log(sql)
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
        // 添加收货地址
        app.post('/qnewaddress',(req,res)=>{
            let id = req.body.id;
            let name = req.body.name;
            let tel = req.body.tel;
            let address = req.body.address;
            var sql = `insert into consigmsg(consigName,consigTel,consigAddress,userid) values('${name}',${tel},'${address}',${id})`;
            console.log(sql)
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
        // 修改个人信息
        app.post('/qupdatauser',(req,res)=>{
            let id = req.body.id;
            let headImg = req.body.headImg;
            let nickname = req.body.nickname;
            let sex = req.body.sex;
            let birthday = req.body.birthday;
            let email = req.body.email;
            var sql = `update user set headImg='${headImg}',nickname='${nickname}',sex='${sex}',birthday='${birthday}',email='${email}' where id=${id}`;
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
    }
}