let obj  = require('fs');
obj.readFile('./lib/readme.md',function(error,data){
    if(error){
        console.log('读取失败');
    }else{
        console.log(data.toString());
    }
});