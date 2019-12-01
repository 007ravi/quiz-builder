import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import FetchTests from './ViewTestsUtil';

function ViewTestsModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h4>Tests</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.bodydata}
            </Modal.Body>
        </Modal>
    );
}

class ViewTests extends Component {
    bodyDataArray = []
    state = {
        bodyData: []
    }

    showData = () => {
        this.setState({
            bodyData: this.bodyDataArray
        })
    }

    componentDidMount() {
        FetchTests(this.bodyDataArray, this.showData)
    }

    render() {
        return (
            <ViewTestsModal
                show={this.props.viewTestsModalState}
                onHide={() => { this.setState(this.props.hideViewTestsModal) }}
                bodydata={this.state.bodyData}
            />
        )
    }
}

export default ViewTests;