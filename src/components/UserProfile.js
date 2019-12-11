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
		// console.log('THIS IS MY PROPS FOR UserProfile--->>', props);
        let userID = props.location.state.user._id
        // console.log(userID);
        // let userEmail = this.props.location.state.user.email
		this.state = {
			user: userID

		}
	}
	componentDidMount(){
		this.getUser();
	}
	getUser = async (req, res, next) => {
		console.log(this.state.user);
		try {
			const users = await fetch(process.env.REACT_APP_API_URL + `/users/${this.state.user}`, {
                credentials: 'include',
                method: "GET"
            });
	        const parsedResponseUserInfo = await users.json();    
			// console.log('THIS IS DOGS!!!!!!! In the UserProfile RESPONSE\n', parsedResponseUserInfo.dogs[0]);
			if (parsedResponseUserInfo) {

			console.log('THIS IS DOGS!!!!!!! In the UserProfile RESPONSE\n', parsedResponseUserInfo.dogs);
				this.props.history.push(`/dogs/${parsedResponseUserInfo.dogs[0]._id}`, parsedResponseUserInfo.dogs[0])
			}
		}
		catch (err) {
			console.log(err)
		}
	}
	render(){
		return(
			<h1>Loading your dog up</h1>
		)
	}
}
export default UserProfile;