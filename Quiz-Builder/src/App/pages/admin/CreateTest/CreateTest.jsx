import React, { Component } from 'react';
import { Form, Button, Table, Modal } from 'react-bootstrap';
import '../../../assets/styles/createTest.css';
import { FetchQuestions, createTest } from './CreateTestUtil';

function TestMessageModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3>Test Created</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    Test Key: {props.testkey}
                </Form>
            </Modal.Body>
        </Modal>
    );
}

class CreateTest extends Component {
    tableBodyDataArray = []
    state = {
        bodyData: this.tableBodyDataArray,
        testMessageModalShow: false,
        Title: "",
        Time: "",
        testKey: ""
    }

    handleFormInputs = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({
            [name]: val
        })
    }

    showData = () => {
        this.setState({
            bodyData: this.tableBodyDataArray
        })
    }

    showModal = () => {
        this.setState({
            testMessageModalShow: true
        })
    }

    createTest = () => {
        createTest(this.state , this.showModal)
    }

    componentDidMount() {
        FetchQuestions(this.tableBodyDataArray, this.showData)
    }

    render() {
        return (
            <div className="container">
                <Form>
                    <Form.Group>
                        <Form.Label><h3>Test Title:</h3></Form.Label>
                        <Form.Control name="Title" type="text" placeholder="Enter Test Title" onChange={this.handleFormInputs} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label><h3>Test Time:</h3></Form.Label>
                        <Form.Control name="Time" type="number" placeholder="Enter Test Time(In Minutes)" onChange={this.handleFormInputs} />
                    </Form.Group>
                    <h3>Select Questions:</h3>
                    <Table className="table-style" responsive striped bordered>
                        <thead className="thead-dark">
                            <tr>
                                <th>S No</th>
                                <th>Question</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody id="table-body">
                            {this.state.bodyData}
                        </tbody>
                    </Table>
                    <Button variant="primary" onClick={this.createTest}>
                        Create Test
                    </Button>
                    <TestMessageModal
                        show={this.state.testMessageModalShow}
                        onHide={() => {
                            this.setState({ testMessageModalShow: false })
                            window.location.reload();
                        }}
                        testkey={this.state.testKey }
                    />
                </Form>
            </div>
        )
    }
}

export default CreateTest;