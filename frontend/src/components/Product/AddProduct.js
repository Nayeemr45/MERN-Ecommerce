import React , { useState , useEffect } from 'react'
import Seller from '../Seller/Seller'
import { Container, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { createProduct } from '../../actions/product';

import Input from './Input'

const AddProduct = () => {
    const seller = JSON.parse(localStorage.getItem('seller'));
    const [product, setProduct] = useState({ name: '', brand: '', category: '', price: '', countInStock: '',description: '',selectedFile: '',user_ID: seller?.result._id });
    const dispatch = useDispatch();

    useEffect(() => {
        if (product) setProduct(product);
      }, [product]);
    
    
    const clear = () => {
        setProduct({ name: '', brand: '', category: '', price: '', countInStock: '',description: '',selectedFile: '',user_ID: seller?.result._id });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        dispatch(createProduct({ ...product }));
        clear();
    }
    const handleChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });
    //const handleChange = (e) => {}
    return (
        <Container>
            <Seller />
        
            <div className="auth-label">Add Product</div>
            <form onSubmit={handleSubmit}>
                <Input name="name" label="Product Name" handleChange={handleChange} type="text"/>
                <Input name="brand" label="Brand" handleChange={handleChange}  type="text"/>
                <Input name="category" label="Category" handleChange={handleChange} type="text" />
                <Input name="price" label="Price" handleChange={handleChange} type="text" />
                <Input name="countInStock" label="In Stock" handleChange={handleChange} type="text" />
                <Input name="description" label="Description, " handleChange={handleChange} type="text" />
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setProduct({ ...product, selectedFile: base64 })} />
                <Button type="submit"  variant="primary">Submit</Button>
            </form>
        </Container>
    )
}

export default AddProduct
