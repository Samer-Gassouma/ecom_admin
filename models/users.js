import mongoose, {model, Schema, models} from "mongoose";

const usersSchema = new Schema({
  name: {type:String, required:true},
  email: {type:String, required:true},
  image: {type:String, required:true},

}, {
  timestamps: true,
});

export const users = models.users || model('users', usersSchema);