//product controller
import ProductModel from '../../models/Product.model.js';
import StatusCodes from '../../helpers/StatusCodes.js';

// Kod tillagd från min inl2, denna behöver nog göras om lite. Men de olika funktionerna täcker nog alla våra olika behov för att hantera produkterna.

const getAllProducts = async (req, res) => {
  try {
    const response = await ProductModel.find();
    res.status(StatusCodes.OK).send(response);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: error.message });
  }
};

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
    slug,
  } = req.body;
  const product = new ProductModel({
    title,
    description,
    price,
    material,
    category,
    quantity,
    imagePrimary,
    images,
    slug,
  });

  try {
    const response = await product.save();
    res.status(StatusCodes.CREATED).send(response);
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: err.message });
  }
};

const getProductWithId = async (req, res) => {
  try {
    const response = await ProductModel.findById(req.params.id);
    res.status(StatusCodes.OK).send(response);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message:
        'Error occured while trying to retrive product with id:' +
        req.params.id,
      error: error.message,
    });
  }
};
const getProductWithSlug = async (req, res) => {
  try {
    const response = await ProductModel.find({ slug: req.query.slug });
    res.status(200).send(response);
    response.length > 0
      ? res.status(200).send(response)
      : res.status(404).send({
          message: 'Could not find a product with slug: ' + req.query.slug,
        });
  } catch (error) {
    error.status = 404;
    error.message = 'No Products to show från slug controllern';
  }
};

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
    slug,
  } = req.body;
  try {
    if (!req.body) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .send({ message: 'Content can not be empty!' });
    }
    const response = await ProductModel.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        price,
        material,
        category,
        quantity,
        imagePrimary,
        images,
        slug,
      },
      { new: true }
    );
    res.status(StatusCodes.OK).send(response);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message:
        'Error occured while trying to update Product with id:' +
        req.params.id,
      error: err.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const response = await ProductModel.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).send({
      message: `Product: ${response.title}, deleted successfully!`,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message:
        'Error occured while trying to delete Produkt with id:' +
        req.params.id,
      error: err.message,
    });
  }
};

export default {
  getAllProducts,
  addProduct,
  getProductWithId,
  updateProduct,
  deleteProduct,
  getProductWithSlug,
};
