$(function(){
  var socket = io.connect();


  var room = $("#m").data("room");
  var user = $("#m").data("user");

  socket.on('connect', function() {
     socket.emit('room', room, user);
  });

  $('form').submit(function(){
    msg = $('#m').val();
    socket.emit('message', msg, room, user);
   
    $('#m').val('');
    return false;
  });

  socket.on('message', function(msg, user) {
     appendMessage(msg, user);
  });

  socket.on('user', function(user){
    appendUser(user);
  });
  
  function appendUser(user){
    var userHash = user.hashCode();
    if($("#"+userHash).length==0){
      $("#users").append("<li id='"+userHash+"'>"+user+"</li>");
    }
  }

  function appendMessage(msg, user){ 
    var date = new Date();
    var dateString = "<span>["+date.toISOString()+"]</span>";
    var userString = "["+user+"]";
    var msgString = "<span>"+msg+"</span>";
    $('#messages').append($('<li>').html(dateString+" "+userString+" "+msgString));
  }


  String.prototype.hashCode = function() {
    var hash = 0, i, chr, len;
    if (this.length === 0) return hash;
    for (i = 0, len = this.length; i < len; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

});
