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
    type: [String],
  },
  qnt: {
    type: String,
  },

  SendAt: {
    type: Date,
    default: Date.now,
    required: true,
  }

});

export const Rfq = mongoose.model("Rfq", schema);
