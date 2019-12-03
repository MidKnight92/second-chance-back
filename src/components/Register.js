import React, { Component } from 'react';

class Register extends Component {
	constructor(){
		super();

		this.state = {
			username = '',
			password = '',
			email = '',
			zip_code = '',
			adopting = true
		}
	}
	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	handleSubmit = async (e) => {
		e.preventDefault();
		const registerResponse = await fetch(process.env.REACT_APP_API_URL + '/users/register',{
			method: 'POST',
			credentials: 'include',
			body: JSON.stringigy(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const parsedResponse = await registerResponse.json();
		if (parsedResponse.status.message === 'Success' && this.state.adopting === true){
			this.props.history.push('/dogs/adopt')
		} else (parsedResponse.status.message === 'Success' && this.state.adopting === false){
			this.props.history.push('/dogs/new')
	}
}