var fs = require('fs');

function readFile(path){

	return new Promise(function(resolve,reject){
		fs.readFile(path,'utf8',function(err,data){
			if(err){
				reject(err)
			}else{
				resolve(data)
			}

		})
	})
}


readFile('./1.txt')
	.then(function(data){
	console.log('./1.txt',data);
	return readFile(data);
}).then(function(data){
	console.log(data);
	return readFile(data);
}).then(function(data){
	console.log(data);
}).catch(function(err){
	console.log(err);
})
