import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import './asset/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import NavScreen from './screens/NavScreen';
import AuthSeller from './components/Auth/AuthSeller';

function App() {
  return (
    <Router>
      <div className="App">
      <NavScreen />
      <Route path='/' component={Home} exact />
      <Route path='/Auth' component={Auth}/>
      <Route path='/Seller' component={AuthSeller}/>
       
      </div>
    </Router>
    
  );
}

export default App;
