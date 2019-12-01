import React, { Component } from 'react';
import { Form, Button, Navbar, Nav } from 'react-bootstrap';
import '../../../../assets/styles/navbar.css';
import AddQuestion from '../AddQuestion/AddQuestion';
import ViewTests from '../ViewTests/ViewTests';

class navbar extends Component {
    state = {
        addQuestionModalShow: false,
        viewTestsModalShow: false
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Navbar.Brand href="/admin" className="nav-brand">Quiz Builder</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={ () => this.setState({ addQuestionModalShow: true }) }>Add Question</Nav.Link>
                    <Nav.Link href="/admin/viewQuestions">View Questions</Nav.Link>
                    <Nav.Link href="/admin/createTest">Create Test</Nav.Link>
                    <Nav.Link onClick={ () => this.setState({ viewTestsModalShow: true }) }>View Tests</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-light" href="/">Logout</Button>
                </Form>
                </Navbar.Collapse>
                <AddQuestion 
                    addQuestionModalState={ this.state.addQuestionModalShow } 
                    hideAddQuestionModal= { () => this.setState({ addQuestionModalShow: false })} 
                />
                <ViewTests 
                    viewTestsModalState={ this.state.viewTestsModalShow } 
                    hideViewTestsModal= { () => this.setState({ viewTestsModalShow: false })} 
                />
            </Navbar>
        )
    }
}

export default navbar;