const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient
const MONGO_LAB_DB_URL = 'mongodb://testuser:olkefk4394kfwejf04@ds141950.mlab.com:41950/taskmanager';
const APP_PORT = process.env.PORT || 3500;
const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
};

MongoClient.connect(MONGO_LAB_DB_URL, (err, database) => {
  	if (err) {
  		console.log(err);
  		return;
  	}
  	db = database;
  	console.log('connected to db ' + MONGO_LAB_DB_URL);

  		

	app.get('/lists', (req, res) => {
		let findResult = db.collection('lists').find({}).toArray((err, data) => {
			if (err) {
	            console.log(err);
	        } else {
	        	res.set(HEADERS);
	            res.json(data);
	        }
		});

	  	//res.send(findResult);
	});

	app.post('/lists', (req, res) => {
		db.collection('lists').insert(req.body, function(err, docsInserted){
		    res.set(HEADERS);
	  		res.json({'status': 'SUCCESS', 'insertedList': docsInserted.ops[0]});
		});		
	});


	app.listen(APP_PORT, () => {
    	console.log('listening on ' + APP_PORT);
  	});
});


/*
function connectToDB() {
	const dbURI = 'mongodb://localhost:27017/testdb';
	mongoose.connect(dbURI);

	mongoose.connection.on('connected', function () {
		console.log('Mongoose connected ' + dbURI);

		var locationSchema = new mongoose.Schema({
			name: {
				type: String,
				required: true
			},
			address: String,
			rating: {
				type: Number,
				"default": 0,
				min: 0,
				max: 5
			},
			facilities: [String]
		});

		mongoose.model('Location', locationSchema);
		//console.log(locationSchema);
	});

	mongoose.connection.on('error', function (err) {
		console.log('Mongoose connection error ' + err);
	});

	mongoose.connection.on('disconnected', function () {
		console.log('Mongoose disconnected');
	});

	console.log('mongoose');

	mongoose.connection.close(function () {
		console.log('Mongoose disconnected callback');
	});
}*/