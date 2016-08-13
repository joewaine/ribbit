


var app = require('express')();




var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('buttonclick', function(){
    io.emit('buttonclick');
  });
  socket.on('button1click', function(){
    io.emit('button1click');
  });

    socket.on('button2click', function(){
    io.emit('button2click');
  });
      socket.on('button3click', function(){
    io.emit('button3click');
  });
        socket.on('button4click', function(){
    io.emit('button4click');
  });


socket.on('gamestart', function(){
  io.emit('gamestart');
  });

socket.on('a', function(){
  io.emit('a');
  });

socket.on('b', function(){
  io.emit('b');
  });

socket.on('c', function(){
  io.emit('c');
  });


socket.on('d', function(){
  io.emit('d');
  });

socket.on('e', function(){
  io.emit('e');
  });


socket.on('f', function(){
  io.emit('f');
  });


socket.on('g', function(){
  io.emit('g');
  });


socket.on('h', function(){
  io.emit('h');
  });


socket.on('i', function(){
  io.emit('i');
  });


socket.on('j', function(){
  io.emit('j');
  });

socket.on('k', function(){
  io.emit('k');
  });

socket.on('l', function(){
  io.emit('l');
  });

socket.on('m', function(){
  io.emit('m');
  });

socket.on('n', function(){
  io.emit('n');
  });

socket.on('o', function(){
  io.emit('o');
  });

socket.on('p', function(){
  io.emit('p');
  });

socket.on('q', function(){
  io.emit('q');
  });

socket.on('r', function(){
  io.emit('r');
  });

socket.on('s', function(){
  io.emit('s');
  });

socket.on('t', function(){
  io.emit('t');
  });


  socket.on('restarter', function(){
    io.emit('restarter');
  });




});



http.listen(3000, function(){
  console.log('listening on *:3000');
});

