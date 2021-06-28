import React, {useState, useEffect} from 'react';
import Seller from '../Seller/Seller';
import {Container, Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

import {useDispatch, useSelector} from 'react-redux';
import FileBase from 'react-file-base64';
import {updateProduct} from '../../actions/product';
import Input from './Input';

const EditProduct = ({products}) => {
  const seller = JSON.parse(localStorage.getItem('seller'));

  const [product, setProduct] = useState({
    id: '',
    name: '',
    brand: '',
    category: '',
    price: '',
    countInStock: '',
    description: '',
    selectedFile: '',
    user_ID: seller?.result._id,
  });
  const dispatch = useDispatch();

  //const { product } = products
  const clear = () => {
    setProduct({
      id: '',
      name: '',
      brand: '',
      category: '',
      price: '',
      countInStock: '',
      description: '',
      selectedFile: '',
      user_ID: seller?.result._id,
    });
  };
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);

  const uploadFileHandler = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    //dispatch(updateProduct({product, ...product }));
    //clear();
  };
  const handleChange = (e) =>
    setProduct({...product, [e.target.name]: e.target.value});
  return (
    <Container>
      <Seller />
      <div className="auth-label">Edit Product</div>
      <form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={products.name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="brand">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter brand"
            value={products.brand}
            onChange={(e) => setBrand(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            value={products.price}
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="countInStock">
          <Form.Label>Count In Stock</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter countInStock"
            value={products.countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            value={products.category}
            onChange={(e) => setCategory(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            value={products.description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <FileBase
          type="file"
          multiple={false}
          onDone={({base64}) => setProduct({...product, selectedFile: base64})}
        />

        {/* <Input name="id" label="Product Id" handleChange={handleChange} type="text" value={products._id}/>
                <Input name="name" label="Product Name" handleChange={handleChange} type="text" value={products.name}/>
                <Input name="brand" label="Brand" handleChange={handleChange}  type="text" value={products.brand}/>
                <Input name="category" label="Category" handleChange={handleChange} type="text"  value={products.category}/>
                <Input name="price" label="Price" handleChange={handleChange} type="text"  value={products.price}/>
                <Input name="countInStock" label="In Stock" handleChange={handleChange} type="text"  value={products.countInStock}/>
                <Input name="description" label="Description, " handleChange={handleChange} type="text"  value={products.description}/>
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setProduct({ ...product, selectedFile: base64 })} /> */}
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default EditProduct;
