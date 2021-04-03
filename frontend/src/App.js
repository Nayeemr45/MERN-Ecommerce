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

function App() {
  return (
    <Router>
      <div className="App">
        <NavScreen />
        <Route path="/" component={Home} exact />
        <Route path="/Auth" component={Auth} />
        <Route path="/Seller" component={AuthSeller} />
        <Route path="/Add_Product" component={AddProduct} />
        <Route path='/product/edit/:id' component={EditProduct} />
        <Route path='/product/:id' component={ProductScreen} />
      </div>
    </Router>
  );
}

export default App;
