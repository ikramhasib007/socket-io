/* jshint esversion: 6 */
const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected.');

	// send data from server to the client
	socket.emit('newEmail', {
		from: 'ikramhasib007@gmail.com',
		text: 'Hey, What is going on.',
		createdAt: 123
	});

	socket.on('createEmail', (newEmail) => {
		console.log('Create email', newEmail);
	});


	//self practices
	// server send a new message to the client
	socket.emit('newMessage', {
		from: 'server@gmail.com',
		text: 'Text messages',
		createdAt: 13456
	});

	// server received new message from the client
	socket.on('createMessage', (newMessage) => {
		console.log('New message', newMessage);
	});

	socket.on('disconnect', () => {
		console.log('User was disconnected.');
	});
});

server.listen(port, () => {
	console.log(`Server starting at port : ${port}`);
});