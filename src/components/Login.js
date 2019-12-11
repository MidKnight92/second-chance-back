import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            username: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
            isLoggedIn: true
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const loginResponse = await fetch(
            process.env.REACT_APP_API_URL + '/users/login', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        const parsedResponse = await loginResponse.json();
        console.log("here is login response");
        console.log(parsedResponse);
        if (parsedResponse.user.adopting) {
            // To write logic that will know which route to push the user too depending on whether they are or aren't adopting.

            console.log('It was a Success');
            console.log('this is the parsedResponse.user._id====', parsedResponse.user._id)
            console.log('THIS IS parsedResponse!!!!')
            console.log(parsedResponse)
            this.props.history.push(`/users/${parsedResponse.user._id}`, parsedResponse)
        } else {
            console.log('nope');
            // '/dogs/:id'
            this.props.history.push(`/users/profile/${parsedResponse.user._id}`, parsedResponse)
        }
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Container>
                    <h1>Welcome Back</h1>
                    <img className="center" width="50%" src="https://images.unsplash.com/photo-1559096996-73fc537f9296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
                    <FormGroup row>
                    <Label sm={2}>Username:</Label>
                    <Col sm={10}>
                    <Input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Password:</Label>
                    <Col sm={10}>
                    <Input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                 <Col sm={{ size: 3 }}>
                 <br />
                  <Button>Login</Button>
                </Col>
                </Container>
            </Form>
        )
    }

}

export default Login;