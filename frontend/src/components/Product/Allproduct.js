import React from 'react';
import {Container, Card, Button, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../asset/css/allproduct.css'
const product = ({products}) => {
  const seller = JSON.parse(localStorage.getItem('seller'));

  return (
        <Container>
        
                
          {(seller?.result._id == products.user_ID && (
            <Table>

            <thead>
                    <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>InStock</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>{products.name}</td>
                    <td>{products.price}</td>
                    <td>{products.countInStock}</td>
                    <td><Button variant="primary" ><Link to={`/product/edit/${products._id}`}>Edit</Link></Button></td>
                    <td><Button variant="primary" >Delete</Button></td>
                    </tr>
                    </tbody>
                                        </>

                    </Table>
            )
            )}
          </Container>
  )
};

export default product;
