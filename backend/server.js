// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect('mongodb+srv://sahushrijan:Latasahu1234@clustertodo.n9nxzzp.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTODO', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected...'))
//     .catch(err => console.log(err));

// // Define Schema and Model
// const TodoSchema = new mongoose.Schema({
//     title: String,
//     description: String
// });

// const Todo = mongoose.model('Todo', TodoSchema);

// // Routes
// app.get('/todos', async (req, res) => {
//     const todos = await Todo.find();
//     res.json(todos);
// });

// app.post('/todos', async (req, res) => {
//     const newTodo = new Todo({
//         title: req.body.title,
//         description: req.body.description
//     });
//     await newTodo.save();
//     res.json(newTodo);
// });

// app.put('/todos/:id', async (req, res) => {
//     const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {
//         title: req.body.title,
//         description: req.body.description
//     }, { new: true });
//     res.json(updatedTodo);
// });

// app.delete('/todos/:id', async (req, res) => {
//     const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
//     res.json(deletedTodo);
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


////////////////////////////////

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://sahushrijan:Latasahu1234@clustertodo.n9nxzzp.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTODO', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected whooo '))
    .catch(err => console.log(err));

// Load Todo model
const Todo = require('./Models/Todo');

// Routes
app.get('/todos/get', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/todos/post', async (req, res) => {
    try {
        const newTodo = new Todo({
            title: req.body.title,
            description: req.body.description
        });
        await newTodo.save();
        res.json(newTodo);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.put('/todos/:id/put', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description
        }, { new: true });
        res.json(updatedTodo);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/todos/:id/delete', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        res.json(deletedTodo);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
