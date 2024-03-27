import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  comp_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,

  },
  product: {
    type: String,
    required: true,
  },
  thickness: {
    type: String,

  },
  grade: {
    type: String,

  },
  SendAt: {
    type: Date,
    default: Date.now,
    required: true,

  },
  grade: {
    type: String,
  },
  qnt: {
    type: String,
  },
})
export const Rfq = mongoose.model("Rfq", schema);
