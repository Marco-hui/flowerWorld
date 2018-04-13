const express = require('express');
const app = express();
const http = require('http').Server(app);
var io = require('socket.io')(http);
const bp = require('body-parser');
const path = require('path');

let Marco = require('./Marco');
let qjy = require('./qjy');
let tian = require('./tian');
let ken = require('./ken');
let ckh = require('./ckh');
let xiaoke = require('./xiaoke');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

app.use(bp.urlencoded({extended:false}));
app.use(express.static(path.join(path.resolve(__dirname,'../'),'/')));
module.exports={
    start(_port){
        Marco.reg(app);
        qjy.reg(app);
        tian.reg(app);
        ken.reg(app);
        ckh.reg(app);
        xiaoke.reg(app);
        http.listen(_port || 1010);
    }
}