import { server } from '../../../../config/server.json';

function addQuestion(QuestionObject) {
    fetch(`${server}/addQuestion`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Question: QuestionObject.Question,
            CorrectAnswerNo: QuestionObject.CorrectAnswerNo,
            Options: QuestionObject.Options
        })
    })
    .then((response) => response.json())
    .catch((error) => {
        console.error(error);
    });
}

export default addQuestion;