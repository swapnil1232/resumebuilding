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
        description:{
            type : String,
            required : true
        },
        htmlfilepath:{
            type : String,
            required : true
        }
  }
  );

  const Template = mongoose.model('templates',schema );
  module.exports = Template;