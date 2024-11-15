const mongoose= require('mongoose');
const todoSchema= new mongoose.Schema({
    title:String,
    description:String,
    status:String
   

})
const todoData = mongoose.model('todos',todoSchema);
module.exports =todoData;