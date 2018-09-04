let http = require('http');
let server = http.createServer();
server.on('request',function(req,res){
    let url = req.url;
    if(url==='/'){
        res.end('index page');
    }else if(url==='/login'){
        res.end('login page');
    }else{
        res.end('404 not found');
    }
});
server.listen(5000,function(){
    console.log('服务器启动了，欢迎访问');
});
