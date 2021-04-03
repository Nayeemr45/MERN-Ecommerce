import React from 'react';
import Seller from '../Seller/Seller';
import {useDispatch, useSelector} from 'react-redux';
const EditProduct = ({match}) => {
  const products = useSelector((state) => state.products);
  //const { product } = products

  return (
    <div>
      <Seller />
      {(products._id == match.params.id &&(
          <>
          
            {products.name}
          </> 
          
          
      ))}
    </div>
  );
};

export default EditProduct;
