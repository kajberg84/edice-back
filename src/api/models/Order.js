import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({
  products: {
    type: [String],
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Order', OrderSchema);
