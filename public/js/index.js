/* jshint esversion:6 */

var socket =  io();

socket.on('connect', function(){
	console.log('Connected to server.');


	socket.emit('createEmail', {
		to: 'iduala@sct-bangla.com',
		text:'Hey, this is Ikram'
	});

	
	// client send feedback to the server
	socket.emit('createMessage', {
		to: 'client@gmail.com',
		text: 'feedback from client'
	});

});

socket.on('disconnect', function(){
	console.log('Disconnected from server.');
});

socket.on('newEmail', function(email){
	// client received data from the server
	console.log('New email', email);
});

// client received new message from server
socket.on('newMessage', function(newMessage){
	console.log('newMessage', newMessage);
});
