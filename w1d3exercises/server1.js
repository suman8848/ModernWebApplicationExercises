const fs = require('fs');
const server  = require('http').createServer();
// server.on('request',(req, res) => {
// 	fs.readFile('./mypic.jpg',(err,data) => {
// 		if(err) throw err;
// 		res.end(data);
// 	});
// });

server.on('request',(req,res)=>{
	const src = fs.createReadStream('./mypic.jpg');
	src.pipe(res);
});

server.listen(5000);