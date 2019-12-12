import React from 'react';
import { Form, Button } from 'react-bootstrap';

const server = "http://localhost:3001";

function FetchTest(cardBodyArray, state, showData) {
    return (fetch(`${server}/getTest`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Key: sessionStorage.getItem("testKey")
        })
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            result = result[0]
            state.time = result.time
            state.testTitle = result.Title
            for(let i=0; i<result.Questions.length; i++) {
                cardBodyArray.push(
                    <h5 key={i}>{result.Questions[i].Question}</h5>
                )
                for(let j=0; j<result.Questions[i].Options.length; j++){
                    cardBodyArray.push(
                        <Form.Check 
                        custom
                        type="radio"
                        name={`Question${i}Options`}
                        key={`Option${i}${j}`}
                        id={`Option${i}${j}`}
                        label={result.Questions[i].Options[j]}
                      />
                    )
                }
                if(i+1 !== result.Questions.length)
                    cardBodyArray.push(<hr />)
            }
            cardBodyArray.push(<br />)
            cardBodyArray.push(<Button className="test-button-style" variant="outline-success" href="/user/submitted">Submit Test</Button>)
            showData()
        })
        .catch((error) => {
            console.error(error);
        })
    )
}

export default FetchTest