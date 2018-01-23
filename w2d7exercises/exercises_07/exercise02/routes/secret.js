var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var mongo = require('mongoskin');

// Nodejs encryption
const crypto = require('crypto'),
    algorithm = 'aes256',
    password = 'asaadsaad';

function encrypt(txt){
  let cipher = crypto.createCipher(algorithm, password)
  let crypted = cipher.update(txt,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(txt){
  let decipher = crypto.createDecipher(algorithm,password)
  let dec = decipher.update(txt,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

// DB url
const url = 'mongodb://localhost:27017/encryptedDB';
 
// Collection Name
const collectionName = 'exercise7';


/* GET users listing. */
router.get('/', function(req, res, next) {
  	let db = mongo.db(url, {native_parser:true});
	db.bind(collectionName);
	db.exercise7.findOne({}, function(err, items) {
		db.close();
	    res.end(decrypt(items.message));
	});
});

module.exports = router;
