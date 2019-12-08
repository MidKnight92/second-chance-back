import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle,
    Container, 
    Row,
    Button
} from 'reactstrap';

function DogProfile(props) {
	console.log('THIS IS PROPS IN RehomeShow\n', props);
	const dog = props.location.state
    return (
        <Container>
			<Card body outline mb="3" color="secondary" style={{background: 'rgb(242,243,245)'}}>
			<Row className="no-gutters">
				<div className="col-md-4">
					<img className="center" width="100%" src={dog.image ? dog.image :`https://cdn11.bigcommerce.com/s-dpaf5pw/images/stencil/original/products/148/658/PawStencilSmallNEW__06609.1544726380.jpg?c=2`} alt="Cute Dog looking to be rehomed"/>
				</div>
				<div className="col-md-8">	
				<CardBody style={{textAlign: "center"}}>
					<CardTitle style={{textTransform: "uppercase", fontWeight: "bolder", textDecoration: "underline"}}>{dog.name}</CardTitle>
					<CardSubtitle>dog.description</CardSubtitle>
					<CardText>{dog.size}</CardText>
					<CardText>{dog.age}</CardText>
					<CardText>{dog.coat}</CardText>
					<CardText>{dog.breeds}</CardText>
					<CardText>{dog.children}</CardText>
					<CardText>{dog.dogs}</CardText>
					<CardText>{dog.cats}</CardText>
					<CardText href='#'>users.email</CardText>
					<Button color="primary" onClick={() => this.props.history.push(`/dogs/dogs/${dog.id}/edit`, dog)}>Info</Button>
				</CardBody>
				</div>
				</Row>
			</Card>
		</Container>
    )
}

 
export default DogProfile;