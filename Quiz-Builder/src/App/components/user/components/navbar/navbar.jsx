import React, { Component } from 'react';
import { Form, Button, Navbar, Nav } from 'react-bootstrap';
import '../../../../assets/styles/navbar.css';

class navbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Navbar.Brand href="/user" className="nav-brand">Quiz Builder</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Form inline>
                    <Button variant="outline-light" href="/">Logout</Button>
                </Form>
            </Navbar>
        )
    }
}

export default navbar;