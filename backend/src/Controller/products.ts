import { Product } from "../Model/product";
import { Category } from "../Model/category";
import { Request, Response } from "express";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log(req?.body?.filter);
    const { category, rating } = req?.body?.filter;
    let products = null;
    console.log(category + "  " + rating);

    if (category === "All" && rating === "All") {
      console.log("first");
      products = await Product.find();
    } else if (category === "All" && rating !== "All") {
      console.log("second");
      products = await Product.find({ "review.rating": rating });
    } else {
      console.log("reached");
      products = await Product.find({ category: category });
    }

    if (!products) {
      res.status(400).json({ message: "No products for these filters" });
      return;
    }
    res.status(200).json({ products });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getCategorizedData = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({});
    const categories = await Category.find({});
    if (!products || !categories) {
      res.status(400).json({ message: "No products found" });
      return;
    }
    console.log(products);
    console.log(categories);
    let catProductsList: Array<any> = [];
    categories.map((category) => {
      const { name } = category;
      console.log(name);
      const productsList = products.filter(({ category, review }) => {
        const { rating } = review;
        console.log(rating);
        return category === name;
        //  return (category === name && rating > 4.0)
      });

      console.log(productsList);
      catProductsList.push(productsList);
    });

    res.status(200).json({ catProductsList });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getProduct = (req: Request, res: Response) => {};

export const add = async (req: Request, res: Response) => {
  try {
    const { product } = req?.body;

    const categoryExit = await Category.find({ name: product?.category });
    console.log(categoryExit);
    if (categoryExit.length === 0) {
      res.status(200).json({ message: "This category doesnot exist" });
      return;
    }

    // Add validation here
    const newProduct = new Product({
      name: product?.name,
      description: product?.description,
      price: product?.price,
      stockQuantity: product?.stockQuantity,
      category: product?.category, //reference
      review: {
        rating: product?.review?.rating,
        reviewerCount: product?.review?.reviewerCount,
      },
      images: product.images,
    });
    newProduct.save();
    res.status(200).json({ message: "New Product added" });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const remove = (req: Request, res: Response) => {
  const { body } = req;
  res.send(body);
};

export const update = (req: Request, res: Response) => {
  const { body } = req;
  res.send(body);
};

export const migrationAPI = async (req: Request, res: Response) => {
  try {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(async (json) => {
        let savedCat: Array<any> = [];
        let savedProducts: Array<any> = [];
        const existingCategories = await Category.find({});
        const existingProducts = await Product.find({});

        existingProducts.map((p) => {
          savedProducts.push(p?.name);
        });

        existingCategories.map((cat) => {
          savedCat.push(cat?.name);
        });

        json.map(async (data: any) => {
          const { title, price, description, category, image, rating } = data;
          const isCatExist = savedCat.find((element) => element === category);
          console.log(savedCat);
          if (isCatExist === undefined) {
            savedCat.push(category);
            const newCategory = new Category({
              name: category,
              description: `Products related to ${category}`,
            });
            newCategory.save();
          }

          const isProductExist = savedProducts.find(
            (element) => element === title
          );
          console.log(isProductExist);
          if (isProductExist === undefined) {
            const newProduct = new Product({
              name: title,
              description: description,
              price: price,
              stockQuantity: Math.floor(Math.random() * 100),
              category: category,
              review: {
                rating: rating?.rate,
                reviewerCount: rating?.count,
              },
              images: [image],
            });
            newProduct.save();
          }
        });

        res.status(200).json({ message: "Migration Successfull" });
      });
  } catch (error: any) {
    console.log("ERRPR");
    console.log(error.message);
  }
};
