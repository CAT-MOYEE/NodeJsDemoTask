const mysql = require('mysql');
const e = require("express");

//查找全部表中数据
function selectAll(req,res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'nodejs'
    });
    connection.connect();
    //定义sql语句
    const sql = 'SELECT * FROM nodeuser';
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('------------------------------------------------------------\n\n');
        res.send(result);
        console.log("查找功能完成")
    });
    connection.end();
    res.end;
}


//插入一条数据
function insert(req,res){
    //获得请求中的数据
    const response = req.query;
    //断点输出测试
    // console.log(response);

    // 创建数据库链接
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'nodejs'
    });
    //链接数据库
    connection.connect();
    //定义sql语句
    const sql = 'INSERT INTO nodeuser(uid,upwd,uage,uname) VALUES(?,?,?,?)';
    const sqlParams = [response.uid,response.upwd,response.uage,response.uname];
    connection.query(sql,sqlParams,function (err, result) {
        if(err){
            // 输出错误信息
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }
        // console.log('--------------------------INSERT----------------------------');
        // console.log('INSERT ID:',result);
        // console.log('-----------------------------------------------------------------\n\n');
        res.send(result);
        console.log("插入功能完成");
    });
    // 关闭连接
    connection.end();
    // 返回响应数据
    res.end;
}


//根据uid删除一条数据
function sqldel(req,res){
    const id = req.query.uid;
    console.log(id);
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'nodejs'
    });
    connection.connect();
    const delSql = 'DELETE FROM nodeuser where uid= ?';
    const delSqlParams=[id];
    connection.query(delSql,delSqlParams,function (err, result) {
        if(err){
            console.log('[DELETE ERROR] - ',err.message);
            return;
        }
        // console.log('--------------------------DELETE----------------------------');
        // console.log('DELETE affectedRows',result.affectedRows);
        // console.log('-----------------------------------------------------------------\n\n');
        res.send(result);
        console.log("删除数据完成")
    });
    connection.end();
    res.end;
}


//根据UID修改一条数据
function change(req,res){
    const response = req.query;
    console.log(response);
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'nodejs'
    });
    connection.connect();
    const sql = 'UPDATE nodeuser SET upwd=?, uage=?, uname=? WHERE uid=?'
    const sqlParam = [response.upwd,response.uage,response.uname,response.uid];
    connection.query(sql,sqlParam,function (err, result) {
        if(err){
            console.log('[UPDATE ERROR] - ',err.message);
            return;
        }
        // console.log('--------------------------UPDATE----------------------------');
        // console.log('UPDATE affectedRows',result.affectedRows);
        // console.log('-----------------------------------------------------------------\n\n');
        res.send(result);
        console.log("修改数据完成")
    });
    connection.end();
    res.end;
}


module.exports = {
    selectAll,
    insert,
    sqldel,
    change
}
