let fs = require('fs');
fs.writeFile('./lib/writeme.md','hello node.js 编写服务器端',function(error){
    if(error){
        console.log('写入失败');
    }else{
        console.log('写入成功');
    }
});