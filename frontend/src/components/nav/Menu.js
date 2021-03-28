import React from 'react';
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
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Product</Nav.Link>
                            <NavDropdown title="Shop" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1">Cart</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Checkout</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">Service</Nav.Link>
                            <Nav.Link href="#link">ContactUs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </Col>
            </Row>
        </Container>
    )
} 
export default Menu;