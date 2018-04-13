var db = require('../db');
var apiResult = require('../utils/apiResult');
const filter = require('../utils/filter');

module.exports={
    reg(app){
        // 各个分类api
        app.get('/keCategories',(req, res) => {
            let kind = req.query.kind;  
            let sql = `select SQL_CALC_FOUND_ROWS * from goodslist where biglistnameid = '${kind}'`;
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })
        // 对应种类api
        app.get('/keKind',(req, res) => {
            let kind = req.query.kind;
            let sql = '';
            if(kind.startsWith('t')){
                sql = `select SQL_CALC_FOUND_ROWS * from goods where biglistnameid = '${kind}'`;
            }
            else{
                sql = `select SQL_CALC_FOUND_ROWS * from goods where type = '${kind}'`;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";     
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })
        // 模糊搜索
        app.get('/keSearch',(req, res) => {
            let keyword = req.query.keyword;
            let concatword = `(flowerName,type,materials)`;
            let sql = `SELECT * FROM goods WHERE concat${concatword} like '%${keyword}%'`;
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })
        })

        // 价格升降序
        app.post('/keOrder',(req, res) => {
            // order:asc, kind: this.kind
            let order = req.body.order;
            let kind = req.body.kind;
            let sql = '';
            if(kind.startsWith('t')){
                sql = `select SQL_CALC_FOUND_ROWS * from goods where biglistnameid = '${kind}' ORDER BY price ${order}`;
            }else{
                sql = `select SQL_CALC_FOUND_ROWS * from goods where type = '${kind}' ORDER BY price ${order}` ;
            }
            sql += "; select FOUND_ROWS() as rowsCount;";
            db.DBHelper.handle(sql,function(result){
                res.send(apiResult(true,result));
            })

        })
    }
}