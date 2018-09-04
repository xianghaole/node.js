let fs = require('fs');
fs.writeFile('./lib/readme.md','你好，我是node.js',function(error){
    console.log('文件写入成功');
});
