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
	});

});
