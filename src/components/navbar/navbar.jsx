import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

export const NavbarMenu = () => {
  return (
    <>
        <Navbar expand="lg" className="Navbar fixed-top">
            <Container>
                <Navbar.Brand href="" className="NavbarBrand">
                    Samir Fernández
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{justifyContent: "end"}}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto Nav">
                            <Nav.Link className="navLink">About</Nav.Link>
                            <Nav.Link className="navLink">Experience</Nav.Link>
                            <Nav.Link className="navLink">DevTools</Nav.Link>
                            <Nav.Link className="navLink">Projects</Nav.Link>
                            <Nav.Link className="navLink">Contact</Nav.Link>
                            <Nav.Link>
                                <Button variant="outline-dark" className="btnResume">
                                    Resume
                                </Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}
