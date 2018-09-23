const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err){
		return console.log('Unable to connect MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');
	
	// // deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
	//	console.log(result);
	// });

	// // deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });
	// 

	// // findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });


	// db.collection('Users').deleteMany({name: 'Zac'});

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID("5ba5045c5d43d305bc459f26")
	}).then((result) => {
		console.log(JSON.stringify(result, undefined, 2));
	});	
	
	
	//User ID
	// 5ba5045c5d43d305bc459f26
	
	// client.close();

});
