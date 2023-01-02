const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
	const ToDo = await ToDoModel.find();
	res.send(ToDo);
};
module.exports.saveToDo = async (req, res) => {
	const { text } = req.body;
	console.log(text);
	ToDoModel.create({ text }).then((data) => {
		console.log("Suksefultyyuu");
		console.log(data);
		res.send(data);
	});
};
module.exports.updateToDo = async (req, res) => {
	const { _id, text } = req.body;
	ToDoModel.findByIdAndUpdate(_id, { text })
		.then(() => res.send("Update"))
		.catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
	const { _id } = req.body;
	ToDoModel.findByIdAndRemove(_id)
		.then(() => res.send("Remove or delete"))
		.catch((err) => console.log(err));
};
