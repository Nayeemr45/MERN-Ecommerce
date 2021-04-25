import React from 'react';
import '../../asset/css/header.css';
import { Container, Row, Col, Navbar, Form, Button, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStoreAlt, faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
 const Header = () => {
    return (
        <Container  fluid="xl">
            <Row>
                <Col>
                    <Navbar expand="lg" className="Navbar">
                        <Navbar.Brand><Link to="/"><FontAwesomeIcon icon={faStoreAlt} /> EShop</Link></Navbar.Brand>
                            <Form inline className="ml-auto mr-auto">
                                <InputGroup className="mb-3" size="lg">
                                    <DropdownButton
                                        as={InputGroup.Prepend}
                                        variant="outline-secondary"
                                        title="All Category"
                                        id="input-group-dropdown-1"
                                        className="dp-btn">
                                        <Dropdown.Item href="#">All Category</Dropdown.Item>
                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                    </DropdownButton>
                                    <Form.Control
                                        className="header-form-control"
                                        size="lg"
                                        htmlSize={40}
                                        placeholder="Search Product Here..."
                                        aria-label="Search Product Here..."
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button  variant="outline-secondary" className="btn-search"><FontAwesomeIcon icon={faSearch} className="icon-search"/></Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form>
                            <Link to="/cart"><FontAwesomeIcon icon={faShoppingBag} /></Link>

                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
} 
export default Header;