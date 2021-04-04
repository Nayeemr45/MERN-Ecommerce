import React, {useEffect} from 'react';
import Menu from '../nav/Menu';
import Product from '../Product/product';
import {useDispatch , useSelector } from 'react-redux';
import {getProducts} from '../../actions/product';
import SellerHome from './SellerHome';
import { Row ,Col } from 'react-bootstrap';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const seller = JSON.parse(localStorage.getItem('seller'));
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
       {(!seller?.result &&(
      <Menu />
       ))}
      
        {(seller?.result ?(
          <SellerHome />
        ):(
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        ))}
    </div>
  );
};

export default Home;
