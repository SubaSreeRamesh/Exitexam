const express=require('express')
const router=express.Router();
const todoModel=require('../model/todomodel')
router.use(express.json());
router.use(express.urlencoded({extended:true}));
router.get('/', async (req, res)=>{
    try{
        const todos = await todoModel.find();
        res.status(200).send(todos);
    }
    catch(error){
        res.status(404).send('todo not found');
    }
});
router.post('/addtodo', async (req, res)=>{
    try{
    const todo=req.body;
    const newtodo =new todoModel(todo);
    const savedtodo = await newtodo.save();
    res.status(200).send('todo added successfull')
    }
    catch(error){
        res.status(404).send('error occured')
    }
});
router.put ('/edit/:id' ,async (req, res)=>{
    try{
        const id= req.params.id;
        const updatedtodo = await todoModel.findByIdAndUpdate(id,req.body);
        res.status(200).send('todo updated successfully');
    }
    catch(error){
        res.status(404).send('error occured');
    }
});
router.delete('/delete/:id' ,async (req,res)=>
{
    try{
        const id= req.params.id;
        const deletetodo= await todoModel.findByIdAndDelete(id);
        res. status(200).send('todo deleted successfully')
    }
    catch(error){
        res.status(404).send('error occured in deletion');
    }
});
module.exports=router