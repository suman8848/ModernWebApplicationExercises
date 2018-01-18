var emitter = require('events');
var util = require('util');

function Clock(){
	emitter.call(this);
}

util.inherits(Clock, emitter);

var clockTick = new Clock();

clockTick.on('tick', function(){
	setInterval(function(){console.log("Woooho"); }, 1000);
});

clockTick.emit('tick');

// clockTick.on('tick',function(){
// 	console.log('Woooho');
// });

// var tickStart = function(){
// 	setInterval(()=>clockTick.emit('tick'), 1000);
// }

// tickStart();
