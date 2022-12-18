// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { ImHappy } from "react-icons/im";
// import "./App.css"
// // import { HashLink } from "react-router-hash-link";
import { LinkContainer } from 'react-router-bootstrap'
// import Button from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
    return (
        <div>
            {/* <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" size={"10px"} className="App-logo">
                        <ImHappy />
                    </Navbar.Brand>
                    <Nav className="me-auto">

                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>


                    </Nav>
                </Container>
            </Navbar> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" size={"10px"} className="App-logo">
                        <ImHappy />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link>More about us</Nav.Link>
                            </LinkContainer>

                        </Nav>
                        <Nav>
                            <LinkContainer to="/login">
                                <Nav.Link>

                                    <Button variant="primary">Login</Button>{' '}
                                </Nav.Link>

                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >


    )
}

export default Header
