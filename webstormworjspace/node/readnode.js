let fs  = require('fs');
fs.readFile('./lib/1.txt',function(error,data){
   console.log(data.toString());
});
