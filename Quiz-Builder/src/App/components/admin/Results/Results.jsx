import React, { Component } from 'react';
import '../../../assets/styles/viewResults.css';
import { Table } from 'react-bootstrap';
import FetchResults from './ResultsUtil';

class Result extends Component {
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
        FetchResults(this.tableBodyDataArray, this.showData) 
    }
    
    render() {
        return (
            <div className="body">
                <div className="content">
                    <h2>Results:</h2>
                    <Table className="table-style" responsive striped bordered>
                        <thead className="thead-dark">
                            <tr>
                                <th>S. No.</th>
                                <th>User Name</th>
                                <th>Percentage</th>
                                <th>Submitted At</th>
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

export default Result;