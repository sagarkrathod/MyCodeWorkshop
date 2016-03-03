var nodeFS = require('fs');
var nodePath = require('path');
var rootPath = "../Database/songs";

function readYear(callback){
  nodeFS.readdir(rootPath,function(err,DirectoryItems){
    if(err) throw err;
    var list = new Array()
    for(i=0;i<DirectoryItems.length;i++){
        list.push(DirectoryItems[i])
    }
    callback(list);
  })
};

function readMoviesInaYear(year, callback){
  var yearPath = nodePath.join(rootPath,year)
  //var normPath = nodePath.join(rootPath,year)
  nodeFS.readdir(yearPath,function(err,DirectoryItems){
    if(err) throw err;
    var list = new Array()
    for(i=0;i<DirectoryItems.length;i++){

            list.push(DirectoryItems[i])
    }
    callback(list);
  })
};



// readMoviesInaYear('2015', function(movies){
//   console.log(movies);
// });


//express framework


// var api=require('express').api();
//
// api.get('/years',function(request, response){
//   readYear(function(yearList){
//     console.log(yearList);
//
//   });
// });


var http = require('http');
//localhost:port
var server = http.createServer(function(request, response){
  //all request will come here
  response.write('<p> Method::'+request.method+'</p>');
  response.write('<p> Url::'+request.url+'</p>');
  readYear(function(yearList){
     response.write(yearList.toString());
     response.end();
  });

}).listen(3000);


var server2=http.createServer();

server2.on('request',function(request, response){
  readMoviesInaYear('2015', function(movies){
    response.write(movies.toString());
    response.end();
  });
});

server2.listen(3001);
