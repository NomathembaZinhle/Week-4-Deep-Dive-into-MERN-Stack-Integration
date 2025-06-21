import Category from '../models/Category.js';

export const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

export const createCategory = async (req, res) => {
  const newCategory = new Category(req.body);
  const saved = await newCategory.save();
  res.status(201).json(saved);
};
