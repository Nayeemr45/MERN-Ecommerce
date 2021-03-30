import React from 'react';
import {Container, Card, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import Product from './Allproduct';
import '../../asset/css/product.css'
const product = ({products}) => {
  const seller = JSON.parse(localStorage.getItem('seller'));

  //const dispatch = useDispatch()

  //const products = useSelector((state) => state.products);

  return (
    <Container className="product-card">
      {!seller?.result && (
        <Card style={{width: '18rem'}} >
        <Card.Title>{products.name}</Card.Title>
          <Card.Img variant="top" src={products.selectedFile} />
          <Card.Body>
            <Card.Text>
            Price: {products.price}
            </Card.Text>
            <Card.Text>
            In Stock: {products.countInStock}
            </Card.Text>
            <Card.Text>
            Description: {products.description}
            </Card.Text>
            <Button variant="primary" >Add to Cart</Button>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default product;
