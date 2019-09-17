//这个是node js内置写法， 引包， 读一个文件, file system, 文件系统
var fs = require("fs");  

//读取文件
fs.readFile("./test.txt", function(err, data) {
   //回调函数， 读取文件后做的事情
   console.log(data.toString());
});

//计算
var sum = 0;
for(var i = 0; i <= 100; i++) {
  sum += i;
}

console.log
