//读取内置模块http, 这个模块是开发服务器用的
var http = require("http");

//创建一个服务器
var http.createServer(function(req, res) {
    res.end("<h1>"i have iphone" + "3 + 4" + "Plus, so happy!"</h1>");
)};

//监听.  辅助材料;https://nodejs.org/en/docs/版本号+ apis, http, creat server, 找到listen

server.listen(3000, "127.0.0.1");

//光标闪烁是挂起状态， ctrl + c 来打断，监听是不能断的
