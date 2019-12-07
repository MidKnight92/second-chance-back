import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class Login extends Component {
    constructor() {
        super();
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
        console.log(parsedResponse);
        if (parsedResponse) {
            console.log('It was a Success');
            this.props.history.push('/users/:id')
        } else {
            console.log('nope');
           this.props.history.push('/users/login')
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