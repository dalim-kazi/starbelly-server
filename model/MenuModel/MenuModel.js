const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    recipe: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    ratting: { type: Number },
  },
  { timestamps: true }
);

const menuModel = mongoose.model("menus", menuSchema);
module.exports = menuModel;
