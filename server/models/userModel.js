//import Mongoose dependency to create schema and compile schema to model instance 
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

//create schema for filtering data to be saved in database
const RegisterSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required: [true,"Name is required"],
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true,"Username is required"],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true,"Password is required"],
    maxlength: 10,
    minlength:5,
    trim: true
  },
  cpassword: {
    type: String,
    required: [true,"Confirm Password is required"],
    maxlength: 10,
    minlength:5,
    trim: true
  },
  gender: {
    type: String,
    required: [true,"Gender is required"],
  },
  profilepicnm: {
    type: String,
    required: [true,"Profile Picture is required Name"],
    trim: true,
  },
  role: String,
  status: Number,
  info: String
});

// Apply the uniqueValidator plugin to RegisterSchema.
RegisterSchema.plugin(uniqueValidator);

// compile schema to model
const RegisterSchemaModel = mongoose.model('register', RegisterSchema );

export default RegisterSchemaModel;