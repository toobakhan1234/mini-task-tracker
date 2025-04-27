const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// Create Task
router.post('/', async (req, res) => {
  const { title, description, assignedTo } = req.body;
  const newTask = new Task({ title, description, assignedTo });
  await newTask.save();
  res.status(201).send('Task created');
});

// Get Tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Update Task Status
router.put('/:id', async (req, res) => {
  const { status } = req.body;
  const task = await Task.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(task);
});

module.exports = router;
