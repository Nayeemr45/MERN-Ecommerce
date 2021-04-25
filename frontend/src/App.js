import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './asset/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import NavScreen from './screens/NavScreen';
import AuthSeller from './components/Auth/AuthSeller';
import AddProduct from './components/Product/AddProduct';
import EditProduct from './components/Product/EditProduct';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import OrderScreen from './screens/OrderScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <NavScreen />
        <Route path='/order/:id' component={OrderScreen} />
        <Route path='/profile/user' component={UserProfileScreen} />
        <Route path='/placeorder' component={PlaceOrderScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path="/Add_Product" component={AddProduct} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/seller/edit/product/:id' component={EditProduct} />
        <Route path="/Seller" component={AuthSeller} />
        <Route path="/Auth" component={Auth} />        
        <Route path="/" component={Home} exact />
        


      </div>
    </Router>
  );
}

export default App;
