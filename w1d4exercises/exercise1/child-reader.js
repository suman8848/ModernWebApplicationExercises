const fs = require('fs');
var data;
process.on('message', function(filepath){
    // fs.readFile(filepath,(err,data)=>{
    //     if(err) throw err;
    //     process.send(data.toString());
    // });
        console.log("filepath"+ filepath);
    fs.createReadStream(filepath)
        .on('data',(dataChunk)=>{
         data+=dataChunk;
        })
        .on('end',()=>{
            process.send(data);
    })
});
