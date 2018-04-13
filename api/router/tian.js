var db = require('../db');
var apiResult = require('../utils/apiResult');
const filter = require('../utils/filter');
var request = require('request');

module.exports={
    reg(app){
        //获取产品明细
        app.get("/ctgetgoods",(req,res) => {
            let query =req.query;
            let id = query.proid*1;
            let sql=`select * from goods where id =${id}`;
            db.DBHelper.handle(sql,(result)=>{
                if(result.length>0){
                    res.send(apiResult(true,result));
                }else{
                    res.send(apiResult(false,'','该产品不存在'));
                }
            })
        })

        //加入购物车
        app.post("/ctaddcar",filter,(req,res) => {
            let params = req.body;
            let userid = params.userid*1;
            let goodid = params.goodid*1;
            let sql = `select * from car where userid = ${userid} and goodid = ${goodid}`;
            db.DBHelper.handle(sql,(result) => {
                if(result.length>0){
                    sql = `UPDATE car SET qty=qty+1 WHERE id=${result[0].id}`;
                    db.DBHelper.handle(sql,(result2) => {
                        if(result2.changedRows>0){
                            res.send(apiResult(true))
                        }else{
                            res.send(apiResult(false,"","修改失败，请咨询管理员"))
                        }
                    })
                }else{
                    sql = `INSERT INTO car (userid,goodid,qty) VALUES (${userid},${goodid},1) `
                    db.DBHelper.handle(sql,(result2) => {
                        if(result2.changedRows>0){
                            res.send(apiResult(true));
                        }else{
                            res.send(apiResult(false,"","修改失败，请咨询管理员"));
                        }
                    })
                }
            })
        })

        //判断是否收藏
        app.get("/ctgetcollect",(req,res) => {
            let userid = req.query.userid;
            let productid = req.query.productid;
            let sql = `select * from collect where userid = ${userid} and productid = ${productid}`;
            db.DBHelper.handle(sql,(result) => {
                if(result.length>0){
                    res.send(apiResult(true));
                }else{
                    res.send(apiResult(false));
                }
            })

        })

        //加入收藏
        app.post("/ctaddcollect",filter,(req,res) => {
            let userid = req.body.userid;
            let productid = req.body.productid;
            let sql = `INSERT INTO collect (userid,productid) VALUES (${userid},${productid})`;
            db.DBHelper.handle(sql,(result) => {
                if(result){
                    res.send(apiResult(true));
                }else{
                    res.send(apiResult(false,"","加入失败，请咨询管理员"));
                }
            })
        })

        //删除收藏
        app.post("/ctRemovecollect",filter,(req,res) => {
            let userid = req.body.userid;
            let productid = req.body.productid;
            let sql = `delete from collect where userid = ${userid} and productid = ${productid}`;
            db.DBHelper.handle(sql,(result) => {
                if(result){
                    res.send(apiResult(true));
                }else{
                    res.send(apiResult(false,"","加入失败，请咨询管理员"));
                }
            })
        })

        //获取用户信息
        app.get("/ctgetuser",filter,(req,res) => {
            let userid = req.query.userid;
            let sql = ` select * from user where id = ${userid}`;
            db.DBHelper.handle(sql,(result) => {
                if(result.length>0){
                    res.send(apiResult(true,result));
                }else{
                    res.send(apiResult(false));
                }
            })
        })

        //服务器代理：图灵
        app.post("/ctgetanwser",(req,res) => {
            let mes = req.body.mes;
            var params={
                "reqType":0,
                "perception": {
                    "inputText": {
                        "text": mes
                    },
                },
                "userInfo": {
                    "apiKey": "e688a0eadc3c41f7a733ccc73a38e182",
                    "userId": "123456"
                }
            };
            request({
                url:"http://openapi.tuling123.com/openapi/api/v2",
                method:"POST",
                json:true,
                headers:{
                    "content-type":"application/json; charset=UTF-8",
                },
                body:params
            },function(err,response,body){
                if (!err && response.statusCode == 200) {
                    res.send(body);
                  }
            })
        })
    }
}