import React from 'react';
import { Link } from 'react-router-dom';
import '../../asset/css/menu.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

 const Menu = () => {

    return (
        <Container  fluid>
            <Row className="menu-row">
                <Col>
                <Navbar expand="lg" className="Navbar-menu">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mr-auto">
                            <li className="menu-nav-link"><Link to="/">Home</Link></li>
                            <li className="menu-nav-link"><Link to="/product">Product</Link></li>
                            <li className="menu-nav-link"><Link to="/service">Service</Link></li>
                            <li className="menu-nav-link"><Link to="/Contactus">ContactUs</Link></li>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </Col>
            </Row>
        </Container>
    )
} 
export default Menu;