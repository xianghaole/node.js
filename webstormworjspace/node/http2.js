var http = require('http');
var server = http.createServer();
server.on('request',function(request,response){
    console.log(request.url)
    if(request.url ==='/'){
        response.write('hello node.js');
        response.end();
    }else if(request.url==='/login'){
        response.write('login page');
        response.end();
    }
});
server.listen(5000,function(){
    console.log('服务器启动了');
});
