var express = require('express');
var bodyParser = require('body-parser');
const User = require('../models/User');
const { response } = require('express');
var jsonParser = bodyParser.json();

const router = express.Router();
 


router.post('/save',async(req,res)=>{
    let body = req.body;
    let user = new User();
    if(body.data.id!=""){
        user = await User .findById(body.data.id);
    }
    user.name =body.data.name;
    user.email =body.data.email;
    user.mobileno =body.data.mobileno;
    user.password =body.data.password;
    user.address =body.data.address;
    user.picturepath =body.data.picturepath;
    user.save().then(result=>{
        res.end(JSON.stringify(result));
    },err=>{
        res.end(JSON.stringify(err));
    });
    
});


router.post('/list',async(req,res)=>{
    
    let users = await User.find();
    res.json({data:users});
    
});

router.post('/get',async(req,res)=>{
    let body = req.body;
    let users = await User.findById(body.data.id);
    res.json({data:users});
    
});

router.post('/delete',async(req,res)=>{
    let body = req.body;
    await User.findByIdAndDelete(body.data.id);
    let data = {
        "data":
        {
        "status":"success"
        }
    }
    res.end(JSON.stringify(data));
 
    
});
module.exports = router;