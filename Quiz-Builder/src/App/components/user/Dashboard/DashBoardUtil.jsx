import React from 'react';
import { Button } from 'react-bootstrap';

const server = "http://localhost:3001";

function FetchTests(tableBodyDataArray, showTableData) {
    fetch(`${server}/getAllTests`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((result) => {
            if (result.length === 0) { 
                tableBodyDataArray.push(
                    <tr key="0">
                        <td colSpan="4">
                            <center><h3>Nothing here yet.</h3></center>
                        </td>
                    </tr>
                )
            }
            else {
                for (var i = 0; i < result.length; i++) {
                    tableBodyDataArray.push(
                    <tr key={i}>
                        <td>{parseInt(i + 1)}</td>
                        <td>{result[i].Title}</td>
                        <td>{result[i].Questions.length}</td>
                        <td><Button href="/user/testkey" variant="btn btn-outline-success">Give Test!</Button></td>
                    </tr>)
                }
            }
            showTableData()
        })
        .catch((error) => {
            console.error(error);
        });
}

export default FetchTests;