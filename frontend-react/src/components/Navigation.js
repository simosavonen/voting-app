import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => (
  <Navbar expand="lg" bg="dark" variant="dark">
    <Navbar.Brand as={Link} to='/'>
      React frontend
        </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={NavLink} to='/addcandidate'>Lisää ehdokas</Nav.Link>
        <Nav.Link as={NavLink} to='/register'>Rekisteröidy</Nav.Link>
        <Nav.Link as={NavLink} to='/login'>Kirjaudu sisään</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation