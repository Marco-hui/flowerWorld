var db = require('../db');
var apiResult = require('../utils/apiResult');
const filter = require('../utils/filter');
const async = require('async');

module.exports={
    reg(app){
        // 获取当前用户的购物车商品
        app.get('/MgetCar',filter,(req,res)=>{
            let userid = req.query.userid;
            var sql = `select * from car where userid=${userid}`;
            db.DBHelper.compile(sql,result=>{
                if(result.length>0){
                    async.map(result,function(item,cb){
                        var goodid = item.goodid;
                        var sql2 = `select * from goods where id=${goodid}`;
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
        // 获取商品数据
        app.get('/MgetGoods',(req,res)=>{
            let page = req.query.page;
            let limit = req.query.limit;
            let id = req.query.id;

            var sql = 'select * from goods';
            if(id) sql += ` where id=${id}`;
            if(page && limit){
                var m = (page-1)*limit;
                sql += ` limit ${m},${limit}`;
            }
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(result.length>0,result))
            })
        })
        // 修改购物车商品数量或勾选状态
        app.post('/MupdateGood',(req,res)=>{
            let id = req.body.id;
            let qty = req.body.qty;
            let checked = req.body.checked;
            var sql = 'update car set';
            if(qty) sql += ` qty=${qty} where id=${id}`
            if(checked) sql += ` checked=${checked} where id=${id}`
            db.DBHelper.compile(sql,result=>{
                res.send(result.changedRows>0);
            })
        })
        // 删除购物车商品
        app.post('/MdelGood',filter,(req,res)=>{
            let id = req.body.id;
            var sql = `delete from car where id=${id}`;
            db.DBHelper.compile(sql,result=>{
                res.send(true);
            })
        })
        // 获取当前用户信息和默认收货地址信息
        app.get('/MgetUser',filter,(req,res)=>{
            let id = req.query.id;
            var sql = `select * from user where id=${id}`;
            sql += ` ;select * from consigmsg where userid=${id} and defaults=1`;
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
        // 获取当前用户地址信息
        app.get('/MgetAddress',filter,(req,res)=>{
            let userid = req.query.userid;
            var sql = `select * from consigmsg where userid=${userid}`;
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(result.length>0,result));
            })
        })
        // 添加地址
        app.post('/MaddAddress',filter,(req,res)=>{
            let newAddress = req.body;
            var sql = `insert into consigmsg(consigName,consigTel,consigAddress,userid) values ('${newAddress.consigName}','${newAddress.consigTel}','${newAddress.consigAddress}',${newAddress.userid})`
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(true,result));
            })
        })
        // 删除地址
        app.post('/MdelAddress',filter,(req,res)=>{
            let id = req.body.id;
            var sql = `delete from consigmsg where id=${id}`;
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(true,result));
            })
        })
        // 更新地址信息
        app.post('/MupdateAddress',filter,(req,res)=>{
            let id = req.body.id;
            let userid = req.body.userid;
            let defaults = req.body.defaults;
            let newAddress = req.body.newAddress;
            var sql = 'update consigmsg set';
            if(defaults) sql += ` defaults=null where defaults=1 and userid=${userid}; update consigmsg set defaults=1 where id=${id}`;
            if(newAddress){
                newAddress = JSON.parse(newAddress)
                sql += ` consigName='${newAddress.consigName}',consigTel='${newAddress.consigTel}',consigAddress='${newAddress.consigAddress}',userid=${newAddress.userid} where id=${id}`;
            }
            db.DBHelper.compile(sql,result=>{
                res.send(apiResult(true,result));
            })
        })
        // 生成订单并删除购物车相应商品
        app.post('/MaddOrder',filter,(req,res)=>{
            let data = req.body.data;
            if(data){
                _data = JSON.parse(data);
                var sql = ' delete from car where 1=2';
                _data.goods.forEach(item=>{
                    if(item.id) sql += ` or id=${item.id}`;
                })
                sql += ` ; insert into orders(goods,goodImg,userid,userMsg,total,consigid,deliveryDate,guestbook) values ('${JSON.stringify(_data.goods)}','${_data.goodImg}',${_data.userid},'${JSON.stringify(_data.userMsg)}',${_data.total},${_data.consigid},'${_data.deliveryDate}','${_data.guestbook}')`
                db.DBHelper.compile(sql,result=>{
                    res.send(apiResult(true,result));
                })
            }else{
                res.send(false)
            }
        })
    }
}