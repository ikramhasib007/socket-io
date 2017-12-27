/* jshint esversion: 6 */
const path = require('path');
const http = require('http');
const si = require('systeminformation');

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

	// getting cpu information
	si.cpu(function(data) {
		socket.emit('cpuInformation', data);
	    console.log('CPU-Information:');
	    console.log(data);
	});


	//socket.emit from admin text Welcome to the chat app
	socket.emit('newMessage', {
		from: 'Admin',
		text: 'Welcome to the chat app.',
		createdAt: new Date().getTime()
	});
	//socket.broadcast.emit from Admin text New user Joined
	socket.broadcast.emit('newMessage', {
		from: 'Admin',
		text: 'New user joined',
		createdAt: new Date().getTime()
	});


	// server received new message from the client
	socket.on('createMessage', (message) => {
		console.log('New message', message);
		// io.emit('newMessage', {
		// 	from: message.from,
		// 	text: message.text,
		// 	createdAt: new Date().getTime()
		// });
		// socket.broadcast.emit('newMessage', {
		// 	from: message.from,
		// 	text: message.text,
		// 	createdAt: new Date().getTime()
		// });
	});

	socket.on('disconnect', () => {
		console.log('User was disconnected.');
	});
});

server.listen(port, () => {
	console.log(`Server starting at port : ${port}`);
});