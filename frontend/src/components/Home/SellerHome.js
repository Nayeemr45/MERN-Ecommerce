import React from 'react'
import {Container, Card, Button, Table, Tab} from 'react-bootstrap';
import {useDispatch , useSelector } from 'react-redux';
import Seller from '../Seller/Seller'
import Allproduct from '../Product/Allproduct'

const SellerHome = () => {
    const products = useSelector((state) => state.products);

    return (
        <Container> 
        <Seller />  
        
        {products.map((product) => (
            
          <Allproduct products={product} key={product._id} />
        ))}   
        </Container>
    )
}

export default SellerHome
