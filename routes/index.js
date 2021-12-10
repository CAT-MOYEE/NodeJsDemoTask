// 引入依赖参数
var express = require('express');
var router = express.Router();
var sql = require('../sql/sql');
const {selectAll, insert, sqldel, change} = require("../sql/sql");



// 页面跳转及响应
router.get('/', function (req, res) {
  var path = require('path');
  path= path.resolve(__dirname,'../public/table.html')
  console.log(path)
  res.sendFile(path);
})



//测试用前端取值并弹窗返回
router.get('/upload', function (req, res) {
  // 输出 JSON 格式
  const response = {
    "input":req.query.input
  };
  console.log(response);
  res.end(JSON.stringify(response));
})



//访问数据库测试
router.get('/selectSql',function (req,res){
  console.log("接受到了数据库访问请求");
  selectAll(req,res);
})




//接受数据库请求并输出
router.get('/makeTab',function (req,res){
  console.log("进入了makeTab方法");
  selectAll(req,res);
})


//插入数据库数据
router.get('/insert',function (req,res){
  console.log("进入了插入方法");
  insert(req,res);
})


//根据ID删除数据库
router.get('/del',function (req,res){
  console.log("进入了删除方法");
  sqldel(req,res);
})


//根据UID修改数据库
router.get('/change',function (req,res){
  console.log("进入了修改方法");
  change(req,res);
})

// 封装路由模块
module.exports = router;



