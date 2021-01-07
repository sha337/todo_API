const express = require('express');
const router  = express.Router();
const pool = require('../models/db');


// Get all todos
router.get('/todos', async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo ORDER BY priority DESC");
        res.json(allTodos.rows);
    } 
    catch (err) {
        console.error(err.message);
        res.json("Sorry! something went wrong");
    }
});

// Create a todo
router.post('/todos', async(req, res) => {
    try {
        const {title} = req.body;
        const {priority} = req.body;
        const state = false;
        const newTodo = await pool.query(
            "INSERT INTO todo (title, priority, state) VALUES ($1, $2, $3) RETURNING *",
            [title, priority, state]
        );

        res.json(newTodo.rows[0]);
    } 
    catch (err) {
        console.error(err.message);
        res.json("Sorry! something went wrong");
    }
});

// Update a todo
router.put('/todos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const {title} = req.body;
        const {priority} = req.body;
        const {state} = req.body;
        
        const updateTodo = await pool.query(
            "UPDATE todo SET title = $1, priority = $2, state = $3 WHERE todo_id = $4",
            [title, priority, state, id]
        );

        res.json("Todo was Updated!");
    }
    catch (err) {
        console.error(err.message);
        res.json("Sorry! something went wrong");
    }
});

// Delete a todo
router.delete('/todos/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        );

        res.json("Todo was successfully deleted");
    } 
    catch (err) {
        console.error(err.message);
        res.json("Sorry! something went wrong");
    }
});

module.exports = router;