import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Test extends Component {
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
        // submitKey(this.state.testKey, this.props)
    }

    render() {
        return (
            <div>
                <Form>
                    test
                </Form>
            </div>
        );
    }
}

export default Test;