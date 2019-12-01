import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar';
import { Form, Button } from 'react-bootstrap';
import '../../../assets/styles/testKey.css';
import submitKey from './TestKeyUtil';

class TestKey extends Component {
    state = {
        testKey: ""
    }

    handleInput = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({
          [name]: val
        })
    }

    submitKey = () => {
        submitKey(this.state.testKey, this.props)
    }

    render() {
        return (
            <div className="testkey-body">
                <Navbar />
                <Form className="testkey-form">
                    <h1 className="title">Enter Test Key</h1><br/>
                    <Form.Group>
                        <Form.Control name="testKey" type="text" placeholder="Enter Test Key" onChange={this.handleInput} />
                    </Form.Group>
                    <Button variant="primary" onClick={this.submitKey}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default TestKey;