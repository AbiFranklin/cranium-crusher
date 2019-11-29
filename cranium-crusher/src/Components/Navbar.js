import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from 'react-bootstrap'

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">MERN Exercise Tracker</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/">Exercise List</Nav.Link>
        <Nav.Link href="/create">Create Exercises</Nav.Link>
        <Nav.Link href="/user">Create User</Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default NavigationBar;