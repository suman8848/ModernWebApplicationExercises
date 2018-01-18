var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();
var readable = fs.createReadStream('./mypic2.jpg');

var gunzip = zlib.createGunzip();

var writable = fs.createWriteStream('./mypictest.jpg');

readable.pipe(gzip).pipe(gunzip).pipe(writable);