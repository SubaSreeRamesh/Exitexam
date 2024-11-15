const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors=require('cors')
const app = express();
app.use(cors())

dotenv.config();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


require('./db/connection');

const todoRouter = require('./routes/todoroutes');
app.use('/api/todo', todoRouter);



const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
