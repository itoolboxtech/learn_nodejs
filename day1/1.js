//这个是node js内置写法， 引包， 读一个文件, file system, 文件系统
var fs = require("fs");  

fs.readFile("./test.txt", function(err, data) {
   console.log(data.toString());
});

var sum = 0;
for(var i = 0; i <= 100; i++) {
  sum += i;
}

console.log
