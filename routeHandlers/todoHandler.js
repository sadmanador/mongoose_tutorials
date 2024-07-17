const express = require("express");
const router = express.Router();
const Todo = require("./../schemas/todoScheme");

// Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: "There is a server side error!" });
  }
});

// Get a single todo
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ error: "Todo not found!" });
    }
  } catch (err) {
    res.status(500).json({ error: "There is a server side error!" });
  }
});

// Post a todo
router.post("/", async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  });
  try {
    await newTodo.save();
    res.status(200).json({
      message: "Todo inserted successfully!!!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There is a server side error!",
    });
  }
});

// Post multiple todos
router.post("/all", async (req, res) => {
  try {
    await Todo.insertMany(req.body);
    res.status(200).json({
      message: "Todos inserted successfully!!!",
    });
  } catch (err) {
    res.status(500).json({
      error: "There is a server side error!",
    });
  }
});

// Put a todo
router.put("/:id", async (req, res) => {
  try {
    const result = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      error: "There is a server side error!",
    });
  }
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(200).json({
        message: "Todo deleted successfully!!!",
      });
    } else {
      res.status(404).json({ error: "Todo not found!" });
    }
  } catch (err) {
    res.status(500).json({
      error: "There is a server side error!",
    });
  }
});

module.exports = router;
