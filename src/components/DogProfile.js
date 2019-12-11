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
import { Link } from 'react-router-dom'


function DogProfile(props) {
    console.log('THIS IS PROPS IN DogProfile\n', props);
    const dog = props.location.state
    return (
        <Container>
			<Card body outline mb="3" color="secondary" style={{background: 'rgb(242,243,245)'}}>
			<Row className="no-gutters">
				<div className="col-md-4">
					<img className="center" width="100%" src={`https://cdn11.bigcommerce.com/s-dpaf5pw/images/stencil/original/products/148/658/PawStencilSmallNEW__06609.1544726380.jpg?c=2`} alt="Cute Dog looking to be rehomed"/>
				</div>
				<div className="col-md-8">	
				<CardBody style={{textAlign: "center"}}>
					<CardTitle style={{textTransform: "uppercase", fontWeight: "bolder", textDecoration: "underline"}}>{dog.name}</CardTitle>
					<CardSubtitle>{dog.description}</CardSubtitle>
					<CardText>{dog.size}</CardText>
					<CardText>{dog.age}</CardText>
					<CardText>{dog.coat}</CardText>
					<CardText>{dog.breed}</CardText>
					<CardText>{dog.good_with_children ? 'Great with Children' : 'Prefers not to be around younger children. Older children/adults are preferred'}</CardText>
					<CardText>{dog.good_with_dogs ? 'Great with other dogs' : 'Prefers to be the only dog'}</CardText>
					<CardText>{dog.good_with_cats ? 'Great with cats' : 'Prefers not to be around cats'}</CardText>
					<CardText>{dog.email}</CardText>
					<Button color="primary" onClick={() => props.history.push(`/dogs/${dog._id}/edit`, dog)}>Edit Info</Button>
				</CardBody>
				</div>
				</Row>
			</Card>
		</Container>
    )
}
// dog.image ? dog.image :

export default DogProfile;