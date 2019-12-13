import React from 'react';
import { Form, Button } from 'react-bootstrap';

const server = "http://localhost:3001";
let answers = []
let score = 0

function FetchTest(cardBodyArray, state, showData, submitTest, timer) {
    fetch(`${server}/getTest`, {
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
            result = result[0]
            state.testTitle = result.Title
            for (let i = 0; i < result.Questions.length; i++) {
                cardBodyArray.push(
                    <h5 key={i}>{result.Questions[i].Question}</h5>
                )
                for (let j = 0; j < result.Questions[i].Options.length; j++) {
                    cardBodyArray.push(
                        <Form.Check
                            custom
                            type="radio"
                            name={`Question${i}Options`}
                            key={`Q${i}-O${j}`}
                            id={`Q${i}-O${j}`}
                            label={result.Questions[i].Options[j]}
                        />
                    )
                }
                if (i + 1 !== result.Questions.length)
                    cardBodyArray.push(<hr key={`hr${i}`} />)
                answers.push(result.Questions[i].CorrectAnswerNo)
            }
            cardBodyArray.push(<br key={`br`} />)
            cardBodyArray.push(<Button key={`button`} className="test-button-style" onClick={ submitTest } variant="outline-success">Submit Test</Button>)
            showData()
            timer(result.Time)
        })
        .catch((error) => {
            console.error(error);
        })
}

function SubmitTest(state) {
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < 4; j++) {
            if (document.getElementsByName(`Question${i}Options`)[j].checked && j + 1 === answers[i])
                score++
        }
    }
    state.score = score
    state.total = answers.length

    fetch(`${server}/postResult`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            TestId: sessionStorage.getItem("testKey"),
            Score: score,
            Total: answers.length,
            UserName: sessionStorage.getItem("username")
        })
    })
        .then((response) => response.json())
        .then((result) => {
            sessionStorage.clear()
        })
}

export {
    FetchTest,
    SubmitTest
}