var db = require('../db');
var apiResult = require('../utils/apiResult');
const filter = require('../utils/filter');

module.exports={
    reg(app){
        app.get('/goods',(req,res)=>{
            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from goods WHERE typeid = '1' `;
            if(page && qty){
                sql += `limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })
        app.get('/goods2',(req,res)=>{
            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from goods WHERE typeid = '10' `;
            if(page && qty){
                sql += `limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })
        app.get('/goods3',(req,res)=>{
            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from goods WHERE typeid = '11' `;
            if(page && qty){
                sql += `limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })
        app.get('/goods4',(req,res)=>{
            let page = req.query.page;
            let qty = req.query.qty;
            let startNo = (page-1)*qty;
            var sql = `select SQL_CALC_FOUND_ROWS * from goods WHERE typeid = '16' `;
            if(page && qty){
                sql += `limit ${startNo},${qty}`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })
    }
}