// order controller
import Order from "../../models/Order.model.js";
import StatusCodes from "../../helpers/StatusCodes.js";

// Getting orders
const getAll = async (req, res) => {
  const orders = await Order.find({});
  res.status(StatusCodes.OK).json(orders);
  if (!orders) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json("An error occured while getting orders");
  }
};

// Getting order by id
const getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.status(StatusCodes.OK).json(order);
  if (!order) {
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
    res.status(StatusCodes.BAD_REQUEST).json("An error ocurred");
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
  } = await req.body;
  console.log(req.body);
  try {
    Order.findByIdAndUpdate(
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
    res.status(StatusCodes.CREATED).json("Order was updated successfully");
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("An error ocurred");
  }
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

export { getAll, getOrder, addOrder, updateOrder, deleteOrder };
