/* jshint esversion:6 */

var socket =  io();

socket.on('connect', function(){
	console.log('Connected to server.');


});

socket.on('disconnect', function(){
	console.log('Disconnected from server.');
});

socket.on('newMessage', function(message){
	console.log('New Message.', message);
});

// dispaly cpu information
socket.on('cpuInformation', function(cpuInfo){
	document.getElementById('cpuInfoBtn').addEventListener('click', function(){
		var content = '';
		content += '<table class="table table-bordered">';
		content += '<tbody>';

		for (var key in cpuInfo) {
		  //console.log(key, yourobject[key]);
		  if(key == 'cache'){
		  	content += '<tr><th>'+ key +'</th><td>';
		  	var subContent = '';
		  	for(var k in cpuInfo[key]){
		  		subContent += '<b>'+ k +'</b> : '+ cpuInfo[key][k] + ' | ';
		  	}
		  	content += subContent+'</td></tr>';
		  } else {
			content += '<tr><th>'+ key +'</th><td>'+ cpuInfo[key] +'</td></tr>';
		  }
		}
		content += '</tbody>';
		content += '</table>';
		document.querySelector('.modal-body').innerHTML = content;

		console.log('cpuInfo', cpuInfo);
	});

});

// dispaly bios information
socket.on('biosInformation', function(biosInfo){
	document.getElementById('biosInfoBtn').addEventListener('click', function(){
		var content = '';
		content += '<table class="table table-bordered">';
		content += '<tbody>';

		for (var key in biosInfo) {
			content += '<tr><th>'+ key +'</th><td>'+ biosInfo[key] +'</td></tr>';
		}
		content += '</tbody>';
		content += '</table>';
		document.querySelector('.modal-body').innerHTML = content;

		console.log('biosInfo', biosInfo);
	});

});

// dispaly baseboard information
socket.on('baseboardInformation', function(baseboardInfo){
	document.getElementById('baseboardInfoBtn').addEventListener('click', function(){
		var content = '';
		content += '<table class="table table-bordered">';
		content += '<tbody>';

		for (var key in baseboardInfo) {
			content += '<tr><th>'+ key +'</th><td>'+ baseboardInfo[key] +'</td></tr>';
		}
		content += '</tbody>';
		content += '</table>';
		document.querySelector('.modal-body').innerHTML = content;

		console.log('baseboardInfo', baseboardInfo);
	});

});

// dispaly cpuTemperature information
socket.on('cpuTemperatureInformation', function(cpuTemperatureInfo){
	document.getElementById('cpuTemperatureInfoBtn').addEventListener('click', function(){
		var content = '';
		content += '<table class="table table-bordered">';
		content += '<tbody>';

		for (var key in cpuTemperatureInfo) {
			content += '<tr><th>'+ key +'</th><td>'+ cpuTemperatureInfo[key] +'</td></tr>';
		}
		content += '</tbody>';
		content += '</table>';
		document.querySelector('.modal-body').innerHTML = content;

		console.log('cpuTemperatureInfo', cpuTemperatureInfo);
	});

});

// dispaly mem information
socket.on('memInformation', function(memInfo){
	document.getElementById('memInfoBtn').addEventListener('click', function(){
		var content = '';
		content += '<table class="table table-bordered">';
		content += '<tbody>';

		for (var key in memInfo) {
		  //console.log(key, yourobject[key]);
		 //  if(key == 'cache'){
		 //  	content += '<tr><th>'+ key +'</th><td>';
		 //  	var subContent = '';
		 //  	for(var k in cpuInfo[key]){
		 //  		subContent += '<b>'+ k +'</b> : '+ cpuInfo[key][k] + ' | ';
		 //  	}
		 //  	content += subContent+'</td></tr>';
		 //  } else {
		 //  }
			content += '<tr><th>'+ key +'</th><td>'+ memInfo[key] +' Byte </td></tr>';
		}
		content += '</tbody>';
		content += '</table>';
		document.querySelector('.modal-body').innerHTML = content;

		console.log('memInfo', memInfo);
	});

});
