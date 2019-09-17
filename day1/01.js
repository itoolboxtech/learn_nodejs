var fs = require("fs");  这个是node js内置写法， 引包， 读一个文件

fs.readFile(".test.txt", function(err, data) {
   console.log(data);
});

var sum = 0;
for(var i = 0; i <= 100; i++) {
  sum += i;
}

console.log
