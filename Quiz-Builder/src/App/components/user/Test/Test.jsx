import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../../../assets/styles/test.css'
import FetchTest from './TestUtil';

class Test extends Component {
    cardBodyArray = []
    time = 0
    state = {
        testKey: "",
        testTime: "",
        testTitle: "",
        cardBody: this.cardBodyArray
    }

    handleInput = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({
            [name]: val
        })
    }

    showData = () => {
        this.setState({
            cardBody: this.cardBodyArray
        })
    }

    componentDidMount() {
        FetchTest(this.cardBodyArray, this.state, this.showData)
    }

    submitTest = () => {

    }

    render() {
        return (
            <div className="test-body">
                <div className="test-content">
                <Card className='test-card-style mx-auto'>
                    <Card.Body>
                        <center><h2>{this.state.testTitle}</h2></center>
                        <hr />
                        <div className='form-group'>
                            {this.state.cardBody}
                        </div>
                    </Card.Body>
                </Card>
                </div>
            </div>
        );
    }
}

export default Test;