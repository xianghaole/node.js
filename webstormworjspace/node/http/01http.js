let http = require('http');
let server = http.createServer();
server.on('request',function(req,res){
    //解决乱码问题
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('hello 中国');

});
server.listen(5000,function(){
    console.log('server start running...')
});
