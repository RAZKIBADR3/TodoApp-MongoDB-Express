const user = require('../model/user');

const controller = {
    loginForm: (req,res)=>{
        res.render('users/login',{title:'login'});
    },
    // login: (req,res)=>{
    //     res.render('users/login');
    // },
    // create: (req,res)=>{
    //     res.render('users/create',{title:'create new account'});
    // },
    // store: async (req,res)=>{
    //     const {email, password} = req.body;
    // },
    // logout: (req,res)=>{
    //     console.log('logout');
    // }
}

module.exports = controller;