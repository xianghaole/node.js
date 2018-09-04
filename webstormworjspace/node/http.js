let http = require('http');
let server = http.createServer();
server.on('request',function(){
    console.log('收到请求了');
});
server.listen(3000,function(){
    console.log('服务器启动成功了,欢迎访问');
});
