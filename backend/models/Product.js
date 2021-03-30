import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
    {
      user_ID: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      selectedFile: {
        type: String,
      },
      brand: {
        type: String,
        required: true,
      },
      category: {
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
        default: 0,
      },
      countInStock: {
        type: Number,
        required: true,
        default: 0,
      },
    }
  )
  
  export default mongoose.model('Product', productSchema);