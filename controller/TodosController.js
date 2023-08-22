const todo = require('../model/todo');

// date
const d = new Date();
const year = d.getFullYear();
const month = String(d.getMonth() + 1).padStart(2, '0');
const day = String(d.getDate()).padStart(2, '0');
const date = `${year}-${month}-${day}`;

const controller = {
    index: async (req,res)=>{
        const todos = await todo.find()
        res.render('todos/index',{title:'todos',todos});
    },
    create:(req,res)=>{
        res.render('todos/create',{title:'add todo'});
    },
    store: async(req,res)=>{
        try{
            const text = req.body.text;
            const user_id = 3;
            const added = new todo({text,date,user_id});
            await added.save();
            res.redirect('/todos');
        }catch(e){
            console.log('error',e.message);
            res.redirect('/todos');
        }
    },
    edit: async(req,res)=>{
        try{
            const todo1 = await todo.findOne({_id:req.params.id});
            res.render('todos/edit',{title:'update todo',todo:todo1});
        }catch(e){
            console.log('error',e.message);
            res.redirect('/todos');
        }
    },
    update: async(req,res)=>{
        try{
            const id = req.body.id
            const text = req.body.text
            await todo.updateOne({_id:id},{text,date});
            res.redirect('/todos');
        }catch(e){
            console.log('error',e.message);
            res.redirect('/todos');
        }
    },
    destroy: async(req,res)=>{
        try{
            await todo.deleteOne({_id:req.params.id});
            res.redirect('/todos');
        }catch(e){
            console.log('error',e.message);
            res.redirect('/todos');
        }
    }
}

module.exports = controller