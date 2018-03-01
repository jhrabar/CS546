//John Hrabar
//I Pledge My Honor That I Have Abided By The Stevens Honor System
//10409311



const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
const uuid = require("uuid/v4");


async function getAllTasks(){
	const itemCollection = await todoItems();
	const items = await itemCollection.find({}).toArray();
	return items;
}

async function getTask(id){
	if(!id || typeof id !== "string") throw "An ID must be provided";
	const itemCollection = await todoItems();
	const item = await itemCollection.findOne({_id: id});
	if(item === null) throw "This item does not exist";

	return item;
}


async function createTask(title, description){
	if(!title || typeof title !== "string") throw "A title must be provided";
	if(!description || typeof description !== "string") throw "A description must be provided";
	const toDoList = await todoItems();

	let id = uuid();
	let newItem = {
		_id: id,
		title: title,
		decription: description,
		completed: false,
		completedAt: null

	};

	const insertInfo = await toDoList.insertOne(newItem);
	if(insertInfo.insertedCount === 0) throw "Item could not be added";

	const item = await this.getTask(insertInfo.insertedId);

	return item;
}

async function completeTask(taskId){
	if(!taskId || typeof taskId !== "string") throw "An ID must be provided";
	const itemCollection = await todoItems();
	if(await itemCollection.findOne({ _id: taskId}) === null) throw "No item exists with that id";
	const toChange = await this.getTask(taskId);
	const date = new Date();
	const newTask = {
		_id: taskId,
		title: toChange["title"],
		description: toChange["description"],
		completed: true,
		completedAt: date
	};

	const update = await itemCollection.replaceOne({_id: taskId}, newTask, true);
	if (update.modifiedCount === 0) {
		throw "Item could not be updated";
	}

	return await this.getTask(taskId);
}

async function removeTask(id) {
	if(!id || typeof id !== "string") throw "An ID must be provided";

	const itemCollection = await todoItems();
	const deleted = await itemCollection.removeOne({_id: id});
	if(deleted.deletedCount === 0){
		throw "Item could not be deleted";
	}

	return true;
}

module.exports = {
	createTask,
	getAllTasks,
	getTask,
	completeTask,
	removeTask
};

