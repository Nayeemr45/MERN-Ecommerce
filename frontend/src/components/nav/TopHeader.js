import React from 'react'
import '../../asset/css/TopHeader.css';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Navbar, Nav, ListGroup, Form, Button, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStoreAlt, faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons'

const TopHeader = () => {
    return (
        <Container className="top-header">
                    <div className="top-header-left">
                        <li className="mr-5">+060 (800) 801-582</li>
                        <li className="" >support@eshop.com</li>
                    </div>
                
                    <div className="top-header-right">
                        <li className="mr-5">Daily Deal</li>
                        <li className="login-btn" ><Link to={`/Auth`}>Login</Link></li>
                    </div>
        </Container>
    )
}

export default TopHeader
