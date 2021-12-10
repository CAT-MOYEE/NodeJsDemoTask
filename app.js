//加载依赖库
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//加载路由控制
var indexRouter = require('./routes/index');

//创建项目实例
var app = express();

//定义EJS模板引擎和模板的位置，也包括jade或其他模型引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//定义日志输出级别
app.use(logger('dev'));
//定义数据解析器
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//定义cookie解析器
app.use(cookieParser());
// 定义静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

//匹配路径和路由
app.use('/', indexRouter);

//404错误处理
app.use(function(req, res, next) {
  next(createError(404));
});

//错误处理
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //开发环境，500错误处理和错误堆栈跟踪
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// 监听服务器端口
app.listen(8081,function (){
  console.log("创建成功");
})
