const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const MONGO_LAB_DB_URL = 'mongodb://testuser:olkefk4394kfwejf04@ds141950.mlab.com:41950/taskmanager';
const APP_PORT = process.env.PORT || 3500;
const RESPONSE_HEADERS = {
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

  		
  	//TODO: implement routing
	app.get('/lists', (req, res) => {
		db.collection('lists').find({}).toArray((err, data) => {
			if (err) {
	            console.log(err);
	        } else {
	        	res.set(RESPONSE_HEADERS);
	            res.json(data);
	        }
		});
	});

	app.post('/lists', (req, res) => {
		let insertDoc = {
			title: req.body.title,
			description: req.body.description
		};
		
		db.collection('lists').insert(insertDoc, function(err, docsInserted){
		    res.set(RESPONSE_HEADERS);
	  		res.json({'status': 'SUCCESS', 'insertedList': docsInserted.ops[0]});
		});		
	});

	/*TODO: app.delete('/lists/:list_id', (req, res) => {})*/
	app.post('/lists/delete', (req, res) => {
		let _id = req.body._id;
		db.collection('lists').remove({"_id": ObjectId(_id)}, (err, ins) => {
			res.set(RESPONSE_HEADERS);
	  		res.json({'status': 'SUCCESS'});
		});
	})


	//-----------------------------------------------------------------------------
	app.get('/tasks', (req, res) => {
		db.collection('tasks').find({ }).toArray((err, data) => {
			if (err) {
	            console.log(err);
	        } else {
	        	res.set(RESPONSE_HEADERS);
	            res.json(data);
	        }
		});

		/*db.collection('lists').find({}).toArray((err, data) => {
			if (err) {
	            console.log(err);
	        } else {
	        	getAllTasks(data);
	        }
		});

		function getAllTasks(lists) {
			let allTasks = [];

			lists.forEach((list) => {
				let listTasks = {
					parentList: list,
					tasks: []
				};
				db.collection('tasks').find({ _id : list._id }).toArray((err, data) => {
					if (err) {
			            console.log(err);
			        } else {
			        	listTasks.tasks.push(data);
			        }
				});
				allTasks.push(listTasks);
				//TODO: Promise or JOIN documents in Mongo
			});
		}*/
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