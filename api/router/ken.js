var db = require('../db');
var apiResult = require('../utils/apiResult');
const filter = require('../utils/filter');

var express=require('express');
var multer=require('multer');
var path=require('path');
var fs=require('fs');
// 设置上传目录
var uploadpath=path.join(path.resolve(__dirname,'../'),'temp/imgs');
var upload=multer({ dest: uploadpath});

module.exports={
    reg(app){
        // -------------------------------登录请求-------------------------------------
        app.get('/hkadmin',(req,res)=>{
            let username = req.query.username;
            let password = req.query.password;
            var sql = `select * from administrator where admin = '${username}' and pass = '${password}'`;
            db.DBHelper.compile(sql,result=>{
                if(result.length>0){
                     res.send(apiResult(true,username,'登录成功'));
                }else{
                    res.send(apiResult(false,null,'登录信息错误'));
                }
            })
        });
        // -------------------------------帐号管理----------------------------------------
        //管理员账号
        app.get('/gladmin',(req,res)=>{
             var sql = `select SQL_CALC_FOUND_ROWS * from administrator`;
             sql += "; select FOUND_ROWS() as rowsCount;";
             db.DBHelper.handle(sql,function(result){
                 res.send(apiResult(true,result));
             })
         });
        //用户账号
        app.get('/yhuser',(req,res)=>{
             var sql = `select SQL_CALC_FOUND_ROWS * from user`;
             sql += "; select FOUND_ROWS() as rowsCount;";
             db.DBHelper.handle(sql,function(result){
                 res.send(apiResult(true,result));
             })
        });
        //添加管理员
        app.post('/adduser',(req,res)=>{
            let username = req.body.username; 
            let password = req.body.password;
     
            var sql =`insert into administrator(admin,pass)values('${username}','${password}')`;

            db.DBHelper.handle(sql,(result)=>{
                res.send(apiResult(true,result));
            })
        })
         //账号删除
        app.post('/removeuser',(req,res)=>{
            let id = req.body.id;
            var sql =`delete from administrator where id = "${id}"`;
            db.DBHelper.handle(sql,(result)=>{
                res.send(apiResult(true,result));
            })
        })
        //密码修改
        app.post('/revampuser',(req,res)=>{
            let id = req.body.id;
            let password = req.body.pass;
            var sql =`update administrator set pass = "${password}" where id ="${id}"`;
            db.DBHelper.handle(sql,(result)=>{
                res.send(apiResult(true,result));
            })
        })
        // ---------------------------------商品管理----------------------------------------
        //所有商品
        app.get('/hkgoods',(req,res)=>{
            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from goods`;
            if(page && qty){
                sql += ` limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        });
        // 商品分类
        app.get('/goodslist',(req,res)=>{
            let kinds = req.query.kinds;
            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from goods where biglistnameid = '${kinds}'`;
            if(page && qty){
                sql += ` limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        });
        //商品查询
        app.get('/searchgoods',(req,res)=>{
            let sqlname =req.query.sqlname;
            let flowerName = req.query.flowerName;
            let type = req.query.type;
            let materials = req.query.materials;
            let price = req.query.price;

            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from goods where concat(flowerName,type,materials,price) like '%${sqlname}%'`;
            if(page && qty){
                sql += ` limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        });
        // 添加商品
        app.post('/addgoods',(req,res)=>{
            let flowerName = req.body.flowerName; 
            let img = req.body.img; 
            let type = req.body.type; 
            let typeid = req.body.typeid; 
            let biglistnameid = req.body.biglistnameid; 
            let price = req.body.price;
            let oprice = req.body.oprice;
        
            var sql =`insert into goods(flowerName,img,type,typeid,biglistnameid,price,oprice)values('${flowerName}','${img}','${type}',${typeid},'${biglistnameid}',${price},${oprice})`;
            db.DBHelper.handle(sql,(result)=>{
                res.send(apiResult(true,result));
            })
        });
        //修改商品
        app.post('/revampgoods',(req,res)=>{
            var data=req.body;
            var str='';
            for(var value in data){
                str+=`${value}='${data[value]}',`
            }
            str=str.slice(0,str.length-1);
            var sql=`update goods SET ${str} WHERE id='${data.id}'`;
            db.DBHelper.handle(sql,(result)=>{
                res.send(apiResult(true,result));
            })
        });
        //修改查询id
        app.get('/revquery',(req,res)=>{
            let id = req.query.id;
            var sql =`select * from goods where id ='${id}'`;
            db.DBHelper.handle(sql,(result)=>{
                res.send(apiResult(true,result));
            })
        });
        //删除数据
        app.post('/delgoods',(req,res)=>{
            let id = req.body.id;
            var sql =`delete from goods where id = "${id}"`;
            db.DBHelper.handle(sql,(result)=>{
                res.send(apiResult(true,result));
            })
        });
        // 多图上传
        app.post('/uploadcircleImg',upload.array('msgImg',4),(req,res)=>{
            var files=req.files;
            var imgUrls=[];
            for(var i=0;i<files.length;i++){
                fs.rename(files[i].path,files[i].path+files[i].originalname);
                imgUrls.push("/temp/imgs/"+files[i].filename+files[i].originalname);
            }
            res.send(apiResult(true,imgUrls));
            // res.send('666')
        })
    }
}