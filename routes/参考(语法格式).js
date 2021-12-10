/*
app.route()函数，创建可链接的途径处理程序的路由路径。
*/


// app.route('/users')
//     .get(function(req, res, next) {})
//     .post(function(req, res, next) {}）

/*
express.Router类，创建模块化安装路径的处理程序。
app.route方法会返回一个Route实例，它可以继续使用所有的HTTP方法，包括get,post,all,put,delete,head等。
express.Router类，则可以帮助我们更好的组织代码结构。在app.js文件中，定义了app.use(‘/’, routes); routes是指向了routes目录下的index.js文件，./routes/index.js文件中，express.Router被定义使用，路径/!*处理都会由routes/index.js文件里的Router来处理。如果我们要管理不同的路径，那么可以直接配置为多个不同的Router。
*/


// app.use('/user', require('./routes/user').user);
// app.use('/admin', require('./routes/admin').admin);
// app.use('/', require('./routes'));