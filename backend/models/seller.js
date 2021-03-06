import mongoose from 'mongoose';

const sellerSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    id: {
        type: String,
    },
    type: {
        type: String,
        required: true
    }
  });

  export default mongoose.model('Seller', sellerSchema);
  
