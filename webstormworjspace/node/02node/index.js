let http = require('http');
let fs = require('fs');
let server  = http.createServer();
let wwwDir = 'D:/www';
server.on('request',function(req,res){
    let url = req.url;
    let filePath = '/index.html';
    if(url!=='/'){
        filePath=url;
    }
    fs.readFile(wwwDir+filePath,function(err,data){
        if(err){
            return res.end('404 not found');
        }
        fs.readdir(wwwDir,function(error,files){
           if(error){
             return  res.end('can not read this file');
           }
           console.log(files);
        });
        res.end(data);
    });

});
server.listen(3000,function(){
    console.log('server start running');
});