import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => (
    <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>React frontend</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link>Lisää ehdokas</Nav.Link>
                <Nav.Link>Rekisteröidy</Nav.Link>
                <Nav.Link>Kirjaudu sisään</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Navigation