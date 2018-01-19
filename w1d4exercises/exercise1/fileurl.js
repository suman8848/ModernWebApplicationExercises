const rx = require('rxjs/Rx');
const fs  = require('fs');
const path = require('path');
const {fork} = require('child_process');
const server = require('http');
const url = require('url');

const requests_ = new rx.Subject();

function call(req, res){
    const myURL = url.parse(req.url,true) ;

    var filepath = myURL.query.url;
    if(filepath){
        const reader = fork('child-reader.js');
        reader.send(filepath);
        reader.on('message', msg => {
            res.end(msg);
        });
    }
}

const hostname = '127.0.0.1';
const port = 1337;
server.createServer((req, res) => {
    requests_.subscribe(call(req,res));
    //requests_.next({ req: req, res: res });

}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

