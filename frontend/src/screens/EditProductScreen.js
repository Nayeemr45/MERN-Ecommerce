import React, {useEffect} from 'react';
import EditProduct from '../components/Product/EditProduct';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsDetails} from '../actions/product';

const EditProductScreen = ({match}) => {
    const products = useSelector((state) => state.products);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsDetails(match.params.id));
      }, [dispatch]);
    
  return (
    <div>
        <EditProduct products={products} key={products._id} /> 
        
    </div>
  );
};

export default EditProductScreen;
