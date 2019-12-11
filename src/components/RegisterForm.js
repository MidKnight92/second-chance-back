import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

// Component Description (Public):
// This is a register Form here we are collecting their info and determining if they are adopting or not. IF they are adopting they will be sent to the adoption form (Adopt.js - dogs/adopt) ELSE they will be sent to the rehoming form (Rehome.js - dogs/rehome).  

class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            email: '',
            zip_code: '',
            adopting: 'on'
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("we prevented Default")
        const registerResponse = await fetch(process.env.REACT_APP_API_URL + '/users/register', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // console.log("we got a response")

        const parsedResponse = await registerResponse.json();
        // console.log("we parsed the response: \n")
        // console.log(parsedResponse)
        // console.log("This is the parsedResponse status", parsedResponse.status);
        if (parsedResponse.user.adopting === true) {
            // console.log("message is 'success'")

            this.props.history.push('/dogs/adopt', parsedResponse)
        } else {
            // console.log("message is not success OR this.state.adopting is not true")
            this.props.history.push('/dogs/new', parsedResponse)
        }
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
            	<Container>
                    <h1>Welcome to the pack</h1>
                    <br />
                <FormGroup row>
                    <Label sm={2}>Username:</Label>
                    <Col sm={10}>
                    <Input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Email:</Label>
                    <Col sm={10}>
                    <Input type="email" name="email" placeholder="email" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Password:</Label>
                    <Col sm={10}>
                    <Input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}>Zip Code:</Label>
                    <Col sm={10}>
                    <Input type="text" name="zip_code" placeholder="zip code" onChange={this.handleChange}/>
                    </Col>
                </FormGroup>
                <FormGroup tag="fieldset" row check>
                <legend className="col-form-label col-sm-2">Are you...</legend>
                <Col sm={10}>
                    <Label check>
                        <Input type="radio" name="adopting" value="on"/>{' '}
                        Looking to adopt a dog? 
                    </Label>
                </Col>  
                </FormGroup>
                <FormGroup tag="fieldset" row check>
                <Col sm={10}>
                    <Label check>
                        <Input type="radio" name="adopting" value="off" onChange={this.handleChange}/>{' '}
                        Looking to rehome a dog? 
                    </Label>
                </Col>  
                </FormGroup>
                 <Col sm={{ size: 3 }}>
                 <br />
                  <Button color="primary">Sign Up</Button>
                </Col>
                </Container>
    		</Form>
        )

    }

}





export default RegisterForm;