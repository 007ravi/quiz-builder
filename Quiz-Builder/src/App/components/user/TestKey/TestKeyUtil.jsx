const server = "http://localhost:3001";

function submitKey(testKey, props) {
    fetch(`${server}/getTest`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Key: testKey
        })
    })
    .then((response) => response.json())
    .then((result) => {
        if(result.length) {
            sessionStorage.setItem("testKey", testKey);
            props.history.push('/user/test');
            window.location.reload();
        }
    })
    .catch((error) => {
        console.error(error);
    });
}

export default submitKey;