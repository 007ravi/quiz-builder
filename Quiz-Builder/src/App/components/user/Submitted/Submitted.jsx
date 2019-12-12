import React, { Component } from 'react';
import '../../../assets/styles/submitted.css'
import { Button, Card } from 'react-bootstrap';
import SubmittedImage from '../../../assets/images/success.png'

class Submitted extends Component {
    render() {
        return (
            <div className="submitted-body">
                <div className="submitted-content">
                    <Card className='submitted-card-style mx-auto'>
                        <img alt="submitted" className="submitted-image-style" src={SubmittedImage} />
                        <Card.Body>
                            <center>
                                <h1>Submitted Successfully</h1><br />
                                <Button variant="outline-success" href="/">Logout</Button>
                            </center>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Submitted;