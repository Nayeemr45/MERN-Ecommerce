import React, {useEffect} from 'react';
import Menu from '../nav/Menu';
import Product from '../Product/product';
import {useDispatch , useSelector } from 'react-redux';
import {getProducts} from '../../actions/product';
import SellerHome from './SellerHome';

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
      
      {seller?.result ? (
        <div className="after-login">
          <SellerHome />
        </div>
      ) : (
        <Menu />
       
      )}
      {user?.result ? (
        
        products.map((product) => (
          <Product products={product} key={product._id} />
        ))
      ) :(
        
        products.map((product) => (
          <Product products={product} key={product._id} />
        ))
        
      )}
    </div>
  );
};

export default Home;
