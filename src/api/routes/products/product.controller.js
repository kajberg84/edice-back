// imports
import ProductModel from '../../models/Product.model.js';
import StatusCodes from '../../helpers/StatusCodes.js';

// helpers
import { ErrorMessageHelper } from '../../helpers/ErrorMessageHelper.js';

const getAllProducts = async (req, res, next) => {
  try {
    const response = await ProductModel.find();
    res.status(StatusCodes.OK).send(response);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ErrorMessageHelper(error));
    next();
  }
};

const addProduct = async (req, res, next) => {
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
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ErrorMessageHelper(error));
    next();
  }
};

const getProductWithId = async (req, res, next) => {
  try {
    const response = await ProductModel.findById(req.params.id);
    res.status(StatusCodes.OK).send(response);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(
        ErrorMessageHelper(
          error,
          'Error occured while trying to retrive product with id:' +
            req.params.id
        )
      );
    next();
  }
};
const getProductWithSlug = async (req, res, next) => {
  try {
    const response = await ProductModel.find({ slug: req.query.slug });
    response.length > 0
      ? res.status(200).send(response)
      : res.status(404).send({
          message: 'Could not find a product with slug: ' + req.query.slug,
        });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ErrorMessageHelper(error));
    next();
  }
};

const updateProduct = async (req, res, next) => {
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
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(
        ErrorMessageHelper(
          error,
          'Error occured while trying to update Product with id:' +
            req.params.id
        )
      );
    next();
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const response = await ProductModel.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).send({
      message: `Product: ${response.title}, deleted successfully!`,
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(
        ErrorMessageHelper(
          error,
          'Error occured while trying to delete Produkt with id:' +
            req.params.id
        )
      );
    next();
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
