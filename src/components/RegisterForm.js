import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            email: '',
            zip_code: '',
            adopting: true
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const registerResponse = await fetch(process.env.REACT_APP_API_URL + '/users/register', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });


        const parsedResponse = await registerResponse.json();

        if (parsedResponse.status.message === 'Success' && this.state.adopting === true) {
            this.props.history.push('/dogs/adopt')
        } else {
            this.props.history.push('/dogs/new')
        }
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
            	<h1>Welcome</h1>
            	<FormGroup row>
    				<Label sm={2}>Username</Label>
    				<Col sm={10}>
    				<Input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
    				</Col>
    			</FormGroup>
    			<FormGroup row>
    				<Label sm={2}>Email</Label>
    				<Col sm={10}>
    				<Input type="email" name="email" placeholder="email" onChange={this.handleChange}/>
    				</Col>
    			</FormGroup>
    			<FormGroup row>
    				<Label sm={2}>Password</Label>
    				<Col sm={10}>
    				<Input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
    				</Col>
    			</FormGroup>
    			<FormGroup row>
    				<Label sm={2}>Zip Code</Label>
    				<Col sm={10}>
    				<Input type="text" name="zip_code" placeholder="zip code" onChange={this.handleChange}/>
    				</Col>
    			</FormGroup>
    			<FormGroup tag="fieldset" row check>
    			<legend className="col-form-label col-sm-2">Are you...</legend>
    			<Col sm={10}>
    				<Label check>
    					<Input type="radio" name="radio1" />{' '}
    					Looking to adopt a dog? 
    				</Label>
    			</Col>	
    			</FormGroup>
    			<FormGroup tag="fieldset" row check>
    			<Col sm={10}>
    				<Label check>
    					<Input type="radio" name="radio1" />{' '}
    					Looking to rehome a dog? 
    				</Label>
    			</Col>	
    			</FormGroup>
    			 <Col sm={{ size: 10, offset: 2 }}>
		          <Button>Sign Up</Button>
		        </Col>
    		</Form>
        )

    }

}





export default Register;