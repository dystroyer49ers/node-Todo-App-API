const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err){
		return console.log('Unable to connect MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	//  db.collection('Todos').findOneAndUpdate({
	//  	_id: new ObjectID('5ba50747b728b305cacefea5')
	//  }, {
	//  	$set: {
	//  		completed: true
	//  	}
	//  }, {
	//  	returnOriginal: false
	//  }).then((result) => {
	//  	console.log(result);
	//  });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5ba5135a6808900623ef8bad')
	}, {
		$set: {
			name: 'Zac'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});



	client.close();
});
