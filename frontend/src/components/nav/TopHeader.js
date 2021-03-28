import React , { useState, useEffect }from 'react'
import '../../asset/css/TopHeader.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

////
import * as actionType from '../../constants/actionTypes';



import { Container , Button } from 'react-bootstrap';

const TopHeader = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

    return (
        <Container className="top-header">
                    <div className="top-header-left">
                        <li className="mr-5">+060 (800) 801-582</li>
                        <li className="" >support@eshop.com</li>
                    </div>
                
                    <div className="top-header-right">
                        <li className="mr-5">Daily Deal</li>
                        {user?.result ? (
                            <div className="after-login">
                              <li>{user?.result.name}</li>
                              <li className="logout-btn ml-5" variant="" onClick={logout}>Logout</li>
                            </div>
                        ) : (
                            <li className="login-btn" ><Link to={`/Auth`}>Login</Link></li>
                        )}
                    </div>
        </Container>
    )
}

export default TopHeader
