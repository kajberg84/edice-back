import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  imagePrimary: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
});

export default mongoose.model('Product', ProductSchema);
