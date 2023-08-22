// imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const session = 

// settings
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended:false} ))

// import routes
const todosRoutes = require('./routes/todos');
const userRoutes = require('./routes/users');

// use routes
app.use('/todos', todosRoutes)
app.use('/users', userRoutes)

// connect to mongoDB server
mongoose.connect("mongodb://127.0.0.1:27017/gestiontodos")
    .then(res => console.log('mongoose connected'))
    .catch(err => console.log(err))


// run server
app.listen('8000',(req, res)=>{
    console.log('server listening on');
})