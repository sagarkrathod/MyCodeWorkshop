
var util = require('util');

var databaseLog = util.debuglog('databaseLog');
var errorLog = util.debuglog('errorLog');

//NODE_DEBUG=Databaselog;
//NODE_DEBUG=errorlog;

//Databaselog('this is database log !!!');
//errorLog('this is error log !!!');


var car = {
    brand:"honda",
    color:['black','blue','green','red']
}


//console.log(util.format('%j',car))
//console.log(util.format('%s',car))

//console.log(util.inspect(util,{colors:true}))

var mystr = 10

console.log(util.isString(mystr))
