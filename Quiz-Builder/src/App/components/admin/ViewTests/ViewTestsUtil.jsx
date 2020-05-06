import React from 'react';
import { Button } from 'react-bootstrap';

const server = "http://localhost:3001";

function FetchTests(bodyDataArray, showData) {
    fetch(`${server}/getAllTests`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((response) => response.json())
        .then((result) => {
            if (result.length === 0) { 
                bodyDataArray.push(
                    <tr>
                        <td colSpan="3">
                            <center><h3>Nothing here yet. Add some Questions.</h3></center>
                        </td>
                    </tr>
                )
            }
            else {
                for (var i = 0; i < result.length; i++) {
                    let id = result[i].Id
                    bodyDataArray.push(
                        <tr key={i}>
                        <td>{parseInt(i + 1)}</td>
                        <td>{result[i].Title}</td>
                        <td>{result[i].Id}</td>
                        <td>
                            <Button
                                href="/admin/results"  variant="primary"
                                onClick={() => sessionStorage.setItem("testId", id)}>
                                View Result
                            </Button>
                        </td>
                        <td>
                            <Button variant="btn btn-danger" onClick={() => DeleteTest(id)}>
                                Delete
                            </Button>
                        </td>
                    </tr>)
                }
            }
            showData()
        })
        .catch((error) => {
            console.error(error);
        });
}

function DeleteTest(Id) {
    fetch(`${server}/deleteTest`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Id: Id
        })
    })
        .then((response) => response.json())
        .then((result) => {
            window.location.reload()
        })
        .catch((error) => {
            console.error(error);
        });
}

export default FetchTests;
