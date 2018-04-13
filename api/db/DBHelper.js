var mysql = require("mysql");

// 创建连接池
var pool = mysql.createPool({
    host : '10.3.136.155',
    user : 'root',
    password : '',
    port:3306,
    database: 'flowershop',
    multipleStatements:true,  // 允许执行多个SQL语句
    timezone:"00:00" // 设置时间格式
});

module.exports={
    handle(sql,cb){
        pool.query(sql,(err,rows)=>{
            if(err){
                cb(err);
            }else{
                if(rows.length>1){
                    cb({rowsCount:rows[1][0]['rowsCount'],data:rows[0]})
                }else{
                    cb(rows);
                }
            }
        })
    },
    compile(sql,cb){
        pool.query(sql,(err,rows)=>{
            if(err){
                cb(err);
            }else{
                cb(rows);
            }
        })
    }
}