let http = require('http');
let fs = require('fs');
let server = http.createServer();
server.on('request',function(req,res){
    fs.readFile('./index.html',function(err,data){
        let url = req.url;
        if(err){
            res.setHeader('Content-Type','text/plain;charset=utf-8');
            res.end('读取文件失败');
        }else{
            if(url==='/'){
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.end(data);
            }else {
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('404 页面也是会迷路的');
            }

        }
    })
});
server.listen(3000,function(){
    console.log('server start running....')
});

