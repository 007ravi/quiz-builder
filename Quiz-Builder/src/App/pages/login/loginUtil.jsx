const server = "http://localhost:3001";

function loginUser(Credentials, props, showErrorMessage) {
    fetch(`${server}/loginUser`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Email: Credentials.Email,
            Password: Credentials.Password,
        })
    })
    .then((response) => response.json())
    .then((result) => {
        if (result === false) {
            showErrorMessage();
          }
          else if (result.Type === "Admin") {
            props.history.push('/admin');
          }
          else {
            props.history.push('/user');
          }
    })
    .catch((error) => {
        console.error(error);
    });
}

function registerUser(Credentials) {
    fetch(`${server}/registerUser`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Name: Credentials.Name,
            Email: Credentials.Email,
            Password: Credentials.Password,
            Type: "User"
        })
    })
    .then((response) => response.json())
    .catch((error) => {
        console.error(error);
    });
}

export {
    loginUser,
    registerUser
}