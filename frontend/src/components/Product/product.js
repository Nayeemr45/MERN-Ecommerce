import React from 'react';
import {Container, Card, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import Product from './Allproduct';
import '../../asset/css/product.css'
import { Link } from 'react-router-dom';
const product = ({product}) => {
  const seller = JSON.parse(localStorage.getItem('seller'));

  //const dispatch = useDispatch()

  //const products = useSelector((state) => state.products);

  return (
    <Container className="product-card">
      {!seller?.result && (
        <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.selectedFile} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
      )}
    </Container>
  );
};

export default product;
