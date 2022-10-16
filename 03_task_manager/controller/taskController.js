const Task = require('../model/taskModel');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../error/customer-error');
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
});


const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    task.save((error) => {
        if (error){
            console.log(error + " in task createTask controller");
            return res.status(400).json({
                success: false,
                msg: "create failed",
            });
        }
    });
    console.log(task);
    console.log("type of task : " + typeof task);
    // res.status( 201).json({task});
    const newTask = await Task.find({});
    res.status(201).json(newTask);
});


const getTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
        return next(createCustomError(`No task with id ${taskID}`, 404));
    }
    res.status(200).json({ task });
});









const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    // findOneAndDelete return the deteted document
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        return next(createCustomError(`No task  with id ${taskID}`, 404));
    }
    res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    });
    if (!task) {
        return next(createCustomError(`No task with id ${taskID}`, 404));
    }
    return res.status(200).json({ task });
});


module.exports = {
    getAllTasks: getAllTasks,
    createTask: createTask,
    getTask: getTask,
    updateTask: updateTask,
    deleteTask: deleteTask
}