import React, { Component } from 'react';
import '../../../assets/styles/viewQuestions.css';
import { Table } from 'react-bootstrap';
import FetchTests from './ViewTestsUtil';

class ViewQuestions extends Component {
    tableBodyDataArray = []
    state = {
        bodyData: this.tableBodyDataArray
    }

    showData = () => {
        this.setState({
            bodyData: this.tableBodyDataArray
        })
    }

    componentDidMount() {
        FetchTests(this.tableBodyDataArray, this.showData)
    }

    render() {
        return (
            <div className="view-questions-content">
                <h2>Tests</h2>
                <Table className="view-questions-table-style" responsive striped bordered>
                    <thead className="thead-dark">
                        <tr>
                            <th>S. No.</th>
                            <th>Test Title</th>
                            <th>Test Key</th>
                            <th>View Results</th>
                            <th>Delete Test</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                        {this.state.bodyData}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ViewQuestions;