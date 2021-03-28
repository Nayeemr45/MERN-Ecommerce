import React from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import './asset/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import NavScreen from './screens/NavScreen';

function App() {
  return (
    <Router>
      <div className="App">
      <NavScreen />
      <Route path='/' component={Home} exact />
      <Route path='/Auth' component={Auth}/>
       
      </div>
    </Router>
    
  );
}

export default App;
