import Task from "../models/Task";




export const findAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const newTask = async (req, res) => {
    const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
    done: req.body.done ? req.body.done : false, //operador ternario
  });
  const taskSave = await newTask.save();
  res.json(taskSave);
};

export const fideOneTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const taskDeleteC = await Task.findByIdAndDelete(req.params.id);
  console.log(taskDeleteC);

  if (taskDeleteC == null) {
    res.json({
      message: "la tarea no existe",
    });
  } else {
    res.json({
      message: "se elimino con exito",
    });
  }
};

export const findAllDoneTrue = async (req, res) => {
  const tanks = await Task.find({ done: true });
  res.json(tanks);
};

export const updateTask = async (req, res) => {
  const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    message: "actualizado con exito",
    updateTask,
  });
};
