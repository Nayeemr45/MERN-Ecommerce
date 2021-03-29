import React from 'react';
import { Link } from 'react-router-dom';
import '../../asset/css/menu.css';
import { Container, Row, Col, Navbar, Nav, NavLink, NavDropdown } from 'react-bootstrap';

 const Menu = () => {
    return (
        <Container  fluid>
            <Row className="menu-row">
                <Col>
                <Navbar expand="lg" className="Navbar-menu">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto mr-auto">
                            <li className="nav-link"><Link to="/">Home</Link></li>
                            <li className="nav-link"><Link to="/product">Product</Link></li>
                            <NavDropdown title="Shop" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1">Cart</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Checkout</NavDropdown.Item>
                            </NavDropdown>
                            <li className="nav-link"><Link to="/service">Service</Link></li>
                            <li className="nav-link"><Link to="/Contactus">ContactUs</Link></li>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </Col>
            </Row>
        </Container>
    )
} 
export default Menu;