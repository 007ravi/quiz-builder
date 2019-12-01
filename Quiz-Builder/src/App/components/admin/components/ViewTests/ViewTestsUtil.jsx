import React from 'react';
import { Button } from 'react-bootstrap';
import '../../../../assets/styles/viewTests.css';

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
                    <center key="0"><h4>Nothing here yet. Create Test first.</h4></center>
                )
            }
            else {
                for (var i = 0; i < result.length; i++) {
                    let id = result[i].Id
                    bodyDataArray.push(
                        <div key={id}>
                            <Button
                                href="/admin/results" className="button-style" variant="primary"
                                onClick={() => sessionStorage.setItem("testId", id)}>
                                View Result
                            </Button>
                            <h5>{result[i].Title}</h5>
                            Key: {result[i].Id}
                        </div>
                    )
                    if (result.length !== 1 && i !== result.length - 1) {
                        bodyDataArray.push(
                            <hr key={i} />
                        )
                    }
                }
            }
            showData()
        })
        .catch((error) => {
            console.error(error);
        });
}

export default FetchTests;