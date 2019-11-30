import React, { Component } from 'react';
import "../../assets/styles/login.css";
import { Form, Button, Modal } from 'react-bootstrap';
import { loginUser, registerUser } from './loginUtil';

function RegisterationMessageModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter">
      <Modal.Body>
        <Form>
          <h3>Registeration Successful.</h3>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={ props.onHide }>Close</Button>
      </Modal.Footer>
    </Modal>
  ); 
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Register</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control name="Name" type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control name="Email" type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control name="Password" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control name="ConfirmPassword" type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Button variant="primary" onClick={props.onSubmit} >
            Register
          </Button>
          <span className="register-message" style={props.messagestyle}>
            {props.errormessage}
          </span>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

class Login extends Component {
  state = {
    modalShow: false,
    regMessageModalShow: false,
    Name: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
    messageStyle: {
      display: 'none'
    },
    registerErrorMessage: ""
  }

  handleLoginCredentials = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({
      [name]: val,
      messageStyle: {
        display: 'none'
      }
    })
  }

  showErrorMessage = () => {
    this.setState({messageStyle : {
      display: ''
    }})
  }

  loginUser = () => {
    loginUser({
      Email: this.state.Email,
      Password: this.state.Password
    }, this.props, this.showErrorMessage)
  }

  registerUser = () => {
    if (this.state.Name === '') {
      this.setState({
        registerErrorMessage: "Enter Name"
      })
      this.showErrorMessage();
    }
    else if (this.state.Email === '') {
      this.setState({
        registerErrorMessage: "Enter Email"
      })
      this.showErrorMessage();
    }
    else if (this.state.Password === '') {
      this.setState({
        registerErrorMessage: "Enter Password"
      })
      this.showErrorMessage();
    }
    else if (this.state.ConfirmPassword !== this.state.Password) {
      this.setState({
        registerErrorMessage: "Passwords do not match"
      })
      this.showErrorMessage();
    }
    else {
      this.setState({ modalShow: false });
      this.setState({ regMessageModalShow: true });
      registerUser({
        Name: this.state.Name,
        Email: this.state.Email,
        Password: this.state.Password
      })
    }
  }

  render() {
    return (
      <div className="login-body">
        <div className="login-content">
          <Form className="form">
            <h1 className="title">Quiz Builder Login</h1>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control name="Email" type="email" placeholder="Enter email" onChange={this.handleLoginCredentials} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control name="Password" type="password" placeholder="Password" onChange={this.handleLoginCredentials} />
            </Form.Group>
            <Button variant="primary" onClick={this.loginUser}>
              Login
            </Button>
            <span className="login-message" style={this.state.messageStyle}>
              Wrong Username Or Password
            </span>
            <Button className="register-button" variant="primary" onClick={() => { this.setState({ modalShow: true }) }}>
              Register
            </Button>
            <MyVerticallyCenteredModal
              show={this.state.modalShow}
              onHide={() => { 
                this.setState({ modalShow: false })
                this.setState({
                  messageStyle: {
                    display: 'none'
                  }
                })
             }}
              onChange={this.handleLoginCredentials}
              onSubmit={() => {
                 this.setState(this.registerUser()); 
                }}
              errormessage={this.state.registerErrorMessage}
              messagestyle={this.state.messageStyle}
            />
            <RegisterationMessageModal
              show={this.state.regMessageModalShow}
              onHide={() => { this.setState({ regMessageModalShow: false }) }}
            />
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;