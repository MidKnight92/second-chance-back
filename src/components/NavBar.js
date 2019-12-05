import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';


class NavBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			isOpen: false
		}
	}
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render(){
		return(
		<div>
	      <Navbar color="dark" dark expand="sm" className="mb-5">
	       <Container>
	       	 <NavbarBrand href="/" className="mr-auto">Second Chance</NavbarBrand>
	        <NavbarToggler onClick={this.toggle} />
	        <Collapse isOpen={this.state.isOpen} navbar>
	          <Nav className="ml-auto" navbar>
	          	<NavItem>
	              <NavLink href="#">Shelter Dogs</NavLink>
	            </NavItem>
	            
	            <NavItem>
	              <NavLink href="#">Rehome Dogs</NavLink>
	            </NavItem>

	            <NavItem>
	              <NavLink href="http://localhost:3000/users/register">Register</NavLink>
	            </NavItem>
	            
	            <NavItem>
	              <NavLink href="#">Login</NavLink>
	            </NavItem>
	          </Nav>
	        </Collapse>
	       </Container>
	      </Navbar>
    </div>
	)
	}
}

export default NavBar;