const rx = require('rx');
const fs  = require('fs');
const path = require('path');
const {fork} = require('child_process');
const server = require('http');
const url = require('url');

const requests_ = new rx.Subject();

function call(e){
    const myURL = url.parse(e.req.url,true) ;

    var filepath = myURL.query.url;
    if(filepath){
        const reader = fork('child-reader.js');
        reader.send(filepath);
        reader.on('message', msg => {
            e.res.end(msg);
        });
    }
}

requests_.subscribe(call);

const hostname = '127.0.0.1';
const port = 1337;
server.createServer((req, res) => {
    requests_.onNext({req:req,res:res});

}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

