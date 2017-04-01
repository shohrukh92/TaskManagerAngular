//TODO: use separate modules and require them in this file
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const MONGO_LAB_DB_URL = 'mongodb://testuser:olkefk4394kfwejf04@ds141950.mlab.com:41950/taskmanager';
const APP_PORT = process.env.PORT || 3500;

MongoClient.connect(MONGO_LAB_DB_URL, (err, database) => {
  	if (err) {
  		console.log(err);
  		return;
  	}
  	db = database;
  	console.log('connected to db ' + MONGO_LAB_DB_URL);

  	//set body parser and access control in headers for CORS 
  	setAppUseConfigs();
  		
  	//TODO: implement routing
	app.get('/lists', (req, res) => {
		db.collection('lists').find({}).toArray((err, data) => {
			if (err) {
	            console.log(err);
	        } else {
	            res.json(data);
	        }
		});
	});

	app.get('/lists/tasks', (req, res) => {
		db.collection('lists').find({}).toArray((err, listsData) => {
			if (err) {
	            console.log(err);
	        } else {
	            //res.json(data);
	            let promises = [];
				listsData.forEach((list) => {
					promises.push(new Promise((resolve, reject) => {
						db.collection('tasks')
						  .find({ listId : String(list._id) })
						  .toArray((err, tasksArrData) => {
							if (err) {
					            console.log(err);
					            reject(err);
					        } else {
					        	resolve({
					        		'list': list,
					        		'tasks': tasksArrData
					        	});
					        }
						});
					}));
				});
				Promise.all(promises).then(values => { 
				  	res.json(values);
				});
	        }
		});
	});


	app.post('/lists', (req, res) => {
		let insertDoc = {
			title: req.body.title,
			description: req.body.description
		};
		
		db.collection('lists').insert(insertDoc, function(err, docsInserted){
	  		res.json({'status': 'SUCCESS', 'insertedList': docsInserted.ops[0]});
		});		
	});

	//TODO: remove all tasks where listId = _id
	app.delete('/lists/:list_id', (req, res) => {
		let _id = req.params['list_id'];
		
		db.collection('lists').remove({"_id": ObjectId(_id)}, (err, ins) => {
	  		res.json({'status': 'SUCCESS'});
		});
	})


	//-----------------------------------------------------------------------------
	app.get('/tasks', (req, res) => {
		db.collection('lists').find({}).toArray((err, data) => {
			if (err) {
	            console.log(err);
	        } else {
	        	getAllTasks(data);
	        }
		});

		function getAllTasks(lists) {
			let promises = [];
			
			lists.forEach((list) => {
				promises.push(new Promise((resolve, reject) => {
					db.collection('tasks')
					  .find({ listId : String(list._id) })
					  .toArray((err, tasksArrData) => {
						if (err) {
				            console.log(err);
				            reject(err);
				        } else {
				        	let result = []
				        	tasksArrData.forEach((task) => {
				        		task.listTitle = list.title;
				        		result.push(task);
				        	})
				        	resolve(result);
				        }
					});
				}));
			});
			Promise.all(promises).then(values => { 
			  	//values is array of arrays
			  	//TODO: code refactoring
			  	let allTasks = []
			  	values.forEach(tasksArr => {
			  		tasksArr.forEach(task => allTasks.push(task));
			  	})
	          	res.json(allTasks);
			});
		}
	});

	app.put('/tasks', (req, res) => {
		let updatedTask = req.body;
		db.collection('tasks').update(
			{ _id: ObjectId(updatedTask._id) },
		   	{ 
		   		$set: {
		   			title: updatedTask.title,
		   			isCompleted: updatedTask.isCompleted,
		   			listId: updatedTask.listId
		   		}
		   	}
		)
		res.json({'status': 'SUCCESS',
			"upd": updatedTask
		});
	});

	app.post('/tasks', (req, res) => {
		let insertDoc = {
			title: req.body.title,
			isCompleted: req.body.isCompleted == 'true',
			listId: req.body.listId
		};
		
		db.collection('tasks').insert(insertDoc, function(err, docsInserted){
	  		res.json({'status': 'SUCCESS', 'insertedTask': docsInserted.ops[0]});
		});
	});

	app.listen(APP_PORT, () => {
    	console.log('listening on ' + APP_PORT);
  	});
});


function setAppUseConfigs() {
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(function (req, res, next) {

	    // Website you wish to allow to connect
	    res.setHeader('Access-Control-Allow-Origin', '*');

	    // Request methods you wish to allow
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	    // Request headers you wish to allow
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	    // Set to true if you need the website to include cookies in the requests sent
	    // to the API (e.g. in case you use sessions)
	    res.setHeader('Access-Control-Allow-Credentials', true);

	    // Pass to next layer of middleware
	    next();
	});
}






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