import { Request, Response } from "express";
import { Category } from "../Model/category";

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find({});
    console.log(categories);
    if (!categories || categories.length === 0) {
      res.send(400).json({ message: "No Categories found" });
    }
    res.status(200).json(categories);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getCategoryDetail = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const catDetails = await Category.findOne({ name });
    if (!catDetails) {
      res.send(400).json({ message: "Not found" });
    }
    res.status(200).json(catDetails);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const add = async (req: Request, res: Response) => {
  try {
    const { categoryDetail } = req.body;
    const { name, description } = categoryDetail;
    const categoryExist = await Category.findOne({ name });
    if (categoryExist) {
      res.status(200).json({ message: "Category already exist" });
      return;
    }
    // else {
    const newCategory = new Category({ name, description });
    newCategory.save();
    res.status(200).send("category saved");
    // }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const remove = (req: Request, res: Response) => {
  res.send(200).json({ message: "Remove category api is not implemented yet" });
};

export const update = (req: Request, res: Response) => {
  res.send(200).json({ message: "Update Category api is not implemented yet" });
};
