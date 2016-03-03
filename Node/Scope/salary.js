
var util = require('util')

var getSalary = function(empDesignation){
  if(empDesignation === 'manager')return 100000;
  else return 50000;
}

//console.dir(util.inspect(module))
//console.dir(module.exports)



module.exports.getSalary = getSalary;
