import React, { Component } from 'react';

//Dogs
//@route GET /dogs/:id
//@description This route will allow Users to see their dogs’ profile page

//Users
//@route GET /users/:id
//@description Users Show Page: This route shows users dog matches require Auth
//@access restricted

class UserProfile extends Component {
	constructor(props){
		super(props);
		console.log('THIS IS MY PROPS FOR UserProfile--->>', props);
        let userID = props.location.state.user._id
        console.log(userID);
        // let userEmail = this.props.location.state.user.email
		this.state = {
			user: userID,
			email: '',
            name: '',
            breed: 'Affenpinscher',
            size: 'small',
            age: 'baby',
            coat: 'short',
            description: '',
            image: '',
            good_with_children: 'off',
            good_with_dogs: 'off',
            good_with_cats: 'off'

		}
	}
	componentDidMount(){
		this.getUser();
		// this.getDogs();
	}
	getUser = async (req, res, next) => {
		console.log(this.state.user);
		try {
			const users = await fetch(process.env.REACT_APP_API_URL + `/users/${this.state.user}`, {
                credentials: 'include',
                method: "GET"
            });
        const parsedResponseUser = await users.json();    
		console.log('THIS IS DOGS!!!!!!! RESPONSE', parsedResponseUser);
		}
		catch (err) {
			console.log(err)
		}
	}
	render(){
		return(
			<h1>UserProfile</h1>
		)
	}
}
export default UserProfile;