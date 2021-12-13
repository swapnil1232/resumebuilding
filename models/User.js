//Require Mongoose
const mongoose = require('mongoose');
const {MongoDBNamespace} = require('mongoose/node_modules/mongodb');

//Define a schema
const Schema = mongoose.Schema;

//Define a schema
const schema = new Schema(
    {
        name:{
            type : String,
            required : true
        },
        email:{
            type : String,
            required : true
        },
        mobileno:{
            type : String,
            required : true
        },
        password:{
            type : String,
            required : true
        },
        address:{
            type : String,
            required : true
        },
        picturepath:{
            type : String,
            // required : true
        }
     
  }
  );

  const User = mongoose.model('users',schema );
  module.exports = User;