

var EventEmitter = require('events').EventEmitter;

var ee = new EventEmitter;

ee.once('AddNewUserOnlyOnce',function(data){
  console.log('Adding New USER as: ' + data)
})


ee.on('AddNewUser',function(data){
  console.log('Adding New USER as: ' + data)
})



ee.emit('AddNewUser','Calling Again and Again!!!')
ee.emit('AddNewUserOnlyOnce','Calling Only Once')
ee.emit('AddNewUser','Calling Again and Again!!!')
ee.emit('AddNewUserOnlyOnce','Calling Only Once')
ee.emit('AddNewUser','Calling Again and Again!!!')
ee.emit('AddNewUserOnlyOnce','Calling Only Once')
