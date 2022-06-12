// imports

import Order from '../../models/Order.model.js';
import StatusCodes from '../../helpers/StatusCodes.js';

// helpers
import { ErrorMessageHelper } from '../../helpers/ErrorMessageHelper.js';
import orderMail from '../../services/emailservice.js';

// Getting orders
const getAll = async (req, res, next) => {
  try {
    const orders = await Order.find({});
    res.status(StatusCodes.OK).json(orders);
    if (!orders) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorMessageHelper(error));
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorMessageHelper(error));
    next();
  }
};

// Getting order by id
const getOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    res.status(StatusCodes.OK).json(order);
    if (!order) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(ErrorMessageHelper(error));
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorMessageHelper(error));
    next();
  }
};

// Adding an order
const addOrder = async (req, res, next) => {
  const {
    products,
    total,
    name,
    email,
    phone,
    address,
    city,
    zipcode,
    status,
  } = req.body;
  const newOrder = new Order({
    products,
    total,
    name,
    email,
    phone,
    address,
    city,
    zipcode,
    status,
  });
  try {
    await newOrder.save();
    res.status(StatusCodes.CREATED).json('Order was created');
    //orderMail(req.body);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json(ErrorMessageHelper(error));
    next();
  }
};

// Update an order
const updateOrder = async (req, res, next) => {
  const {
    products,
    total,
    name,
    email,
    phone,
    address,
    city,
    zipcode,
    status,
  } = req.body;
  console.log(req.body);
  try {
    const response = await Order.findByIdAndUpdate(
      req.params.id,
      {
        products,
        total,
        name,
        email,
        phone,
        address,
        city,
        zipcode,
        status,
      },
      { new: true }
    );
    res
      .status(StatusCodes.OK)
      .json({ msg: 'Order was updated successfully', response });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorMessageHelper(error));
    next();
  }
};

// Delete an order
const deleteOrder = async (req, res, next) => {
  try {
    Order.findByIdAndDelete(req.params.id, (error) => {
      if (error)
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json(ErrorMessageHelper(error));
      res.status(StatusCodes.CREATED).json('Order was deleted successfully');
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ErrorMessageHelper(error));
    next();
  }
};

export { getAll, getOrder, addOrder, updateOrder, deleteOrder };
