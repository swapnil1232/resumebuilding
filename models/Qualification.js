//Require Mongoose
const mongoose = require('mongoose');
const {MongoDBNamespace} = require('mongoose/node_modules/mongodb');

//Define a schema
const Schema = mongoose.Schema;

//Define a schema
const schema = new Schema(
    {
        title:{
            type : String,
            required : true
        }
  }
  );

  const Qualification = mongoose.model('qualifications',schema );
  module.exports = Qualification;