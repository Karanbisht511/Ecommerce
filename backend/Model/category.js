const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  // parentCategory: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Category',
  // },
  // subcategories: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Category',
  //   },
  // ],
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;