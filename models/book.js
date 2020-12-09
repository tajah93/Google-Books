const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, required: true },
    authors: [{type: String, required: true}],
    description: {type: String},
    image: {type: String},
    link: {type: String},
  });
  
  const Book = mongoose.model("Book", schema);
  
  module.exports = Book;