var express = require('express');
var app = express();
var ip = require('ip');
var bodyParser = require('body-parser');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({   // to support URL-encoded bodies
    extended: true
}));

//  主頁輸出 "Hello World"
app.get('/', function (req, res) {
    console.log("main GET request");
    res.send('Hello World');
})


//  POST 請求
app.post('/repeat', function (req, res) {
    var name = req.body.name;
    console.log("name : "+ name);
    res.send("name : " + name);
})



//  /list_user 頁面GET請求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 請求");
    res.send('用戶頁面');
})

// 對頁面 abcd, abxcd, ab123cd, 等響應GET請求
app.get('/ab*cd', function (req, res) {
    console.log("/ab*cd GET 請求");
    res.send('正在運轉');
})

app.get('/who/:name?/:age?',function(req, res) {
    var name = req.params.name;
    var age = req.params.age;
    console.log("Correct");
    res.send('名字:'+name+'年齡'+age)

})


var server = app.listen(8081, function () {

    var host = ip.address();
    var port = server.address().port

    console.log("地址 http://%s:%s", host, port)

})
