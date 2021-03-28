import React from 'react'
import Header from '../components/nav/Header'
import Menu from '../components/nav/Menu'
import PRODUCT_CAROSOL from '../components/Product_carosol'
import TopHeader from '../components/nav/TopHeader';
const NavScreen = () => {
    return (
        <div>
            <TopHeader />
        <Header />
        <Menu />
        <PRODUCT_CAROSOL />
        </div>
    )
}

export default NavScreen;
