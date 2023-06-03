import mongoose, {model, Schema, models} from "mongoose";

const Group_ProductSchema = new Schema({
  title: {type:String, required:true},
  description: String,
  price: {type: Number, required: true},
  images: [{type:String}],
  category: {type:mongoose.Types.ObjectId, ref:'Category'},
  properties: {type:Object},
  Group_Prod: {type:Object, required: true},
}, {
  timestamps: true,
});

export const Group_Product = models.Group_Product || model('Group_Product', Group_ProductSchema);