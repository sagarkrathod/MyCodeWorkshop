
var util = require('util');

function User(){
}
User.prototype.loggedIn = function () {
    console.log('this is logged in user')
}

function Admin(){

}

var user =  new User();

user.loggedIn();

util.inherits(Admin,User)

var admin = new Admin()

admin.loggedIn();
