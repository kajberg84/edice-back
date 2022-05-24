import mongoose from "mongoose";
import validator from "validator";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 1000,
  },
  address: {
    type: String,
    required: true,
    maxLength: 1000,
  },
  city: {
    type: String,
    required: true,
    maxLength: 50,
  },
  zipcode: {
    type: Number,
    required: true,
    maxLength: 100,
  },
  phone: {
    type: Number,
    required: true,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxLength: 100,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: "Not a valid email",
      isAsync: false,
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 5,
    maxLength: 1000,
  },
});

export default mongoose.model("User", UserSchema);
