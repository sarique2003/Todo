const express = require('express');
const mongoose = require('mongoose')
const Cors = require('cors');
const dotenv = require('dotenv')

const {
    getTodos, createTodo, updateTodo, deleteTodo
} = require('./controllers/todoController')

dotenv.config()
//App config
const app = express();
const port = process.env.PORT || 8000
const connectionURL = process.env.MONGO_URI

//Middlewares
//conver to JSON
app.use(express.json())
app.use(Cors())

//DB config
mongoose.connect(connectionURL).then(()=>{
    app.listen(port,()=> console.log(`Ruuning on port: ${port}`))
})
.catch((err) =>{
    console.log(err);
});

//Get todos list
app.get('/todos', getTodos)

//Create a new Todo
app.post('/todos', createTodo)

//Update a new todo
app.put('/todos/:id', updateTodo)

//Delete a todo
app.delete('/todos/:id', deleteTodo)


