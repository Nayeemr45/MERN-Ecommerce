import React from 'react'
import Header from '../components/nav/Header'
import Menu from '../components/nav/Menu'
import TopHeader from '../components/nav/TopHeader';
const NavScreen = () => {
    return (
        <div>
        <TopHeader />
        <Header />
        <Menu />
        </div>
    )
}

export default NavScreen;
