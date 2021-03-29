import React , { useState, useEffect }from 'react'
import PRODUCT_CAROSOL from '../Product_carosol'
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const Home = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [seller, setSeller] = useState(JSON.parse(localStorage.getItem('seller')));

    return (
        <div>
            {user?.result && (
                <div className="after-login">
                    <PRODUCT_CAROSOL />
                </div>
            )}
            {seller?.result && (
                <div className="after-login">
                    seller
                </div>
            )}
        </div>
    )
}

export default Home
