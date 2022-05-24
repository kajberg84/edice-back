// order controller
import Order from "../../models/Order.js";
import StatusCodes from "../../helpers/StatusCodes.js";

// Getting orders
const getOrder = async (req, res) => {
  const orders = await Order.find({});
  res.status(StatusCodes.OK).json(orders);
  if (!orders) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json("An error occured while getting orders");
  }
};

// Adding an order
const addOrder = async (req, res) => {
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
    res.status(StatusCodes.CREATED).json("Order was created");
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST);
  }
};

// Update an order
const updateOrder = async (req, res) => {
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
  Order.findByIdAndUpdate(req.params.id, {
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
  res.status(StatusCodes.CREATED).json("Order was updated successfully");
};

// Delete an order
const deleteOrder = async (req, res) => {
  Order.findByIdAndDelete(req.params.id, (err) => {
    if (err)
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json("Order could not be deleted due to server error");
    res.status(StatusCodes.CREATED).json("Order was deleted successfully");
  });
};

export { getOrder, addOrder, updateOrder, deleteOrder };
