const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err){
		return console.log('Unable to connect MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

});
	