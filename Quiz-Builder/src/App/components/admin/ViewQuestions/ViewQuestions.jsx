import React, { Component } from 'react';
import '../../../assets/styles/viewQuestions.css';
import { Table } from 'react-bootstrap';
import { FetchQuestions } from './ViewQuestionsUtil';

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
        FetchQuestions(this.tableBodyDataArray, this.showData) 
    }

    render() {
        return (
            <div className="body">
                <div className="content">
                    <h2>Questions:</h2>
                    <Table className="table-style" responsive striped bordered>
                        <thead className="thead-dark">
                            <tr>
                                <th>S No</th>
                                <th>Question</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody id="table-body">
                            { this.state.bodyData }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default ViewQuestions;