//product controller
import Product from "../../models/Product.js";
import StatusCodes from "../../helpers/StatusCodes.js";

// Getting products
const getProduct = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json(products);
  if (!products) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json("An error occured while getting products");
  }
};

// Adding a product
const addProduct = async (req, res) => {
  const {
    title,
    description,
    price,
    material,
    category,
    quantity,
    imagePrimary,
    images,
  } = req.body;
  const newProduct = new Product({
    title,
    description,
    price,
    material,
    category,
    quantity,
    imagePrimary,
    images,
  });
  try {
    await newProduct.save();
    res.status(StatusCodes.CREATED).json("Product was created");
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST);
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const {
    title,
    description,
    price,
    material,
    category,
    quantity,
    imagePrimary,
    images,
  } = req.body;
  Product.findByIdAndUpdate(req.params.id, {
    title,
    description,
    price,
    material,
    category,
    quantity,
    imagePrimary,
    images,
  });
  res.status(StatusCodes.CREATED).json("Product was updated successfully");
};

// Delete a product
const deleteProduct = async (req, res) => {
  Product.findByIdAndDelete(req.params.id, (err) => {
    if (err)
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json("Product could not be deleted due to server error");
    res.status(StatusCodes.CREATED).json("Product was deleted successfully");
  });
};

export { getProduct, addProduct, updateProduct, deleteProduct };
