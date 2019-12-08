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
    Row
} from 'reactstrap';



function ShelterShow(props) {
	console.log('This is props in Shelter show\n');
	const dog = props.location.state
    return (
        <Container >
			<Card className="mb-3"  body outline color="secondary">
			<Row className="no-gutters">
				<div className="col-md-4">
					<img width="100%" src={dog.photos.length > 0 ? dog.photos[0].medium : `https://cdn11.bigcommerce.com/s-dpaf5pw/images/stencil/original/products/148/658/PawStencilSmallNEW__06609.1544726380.jpg?c=2`} alt="Dog needing to be adopted from Pet Finder API results"/>
				</div>
				<div className="col-md-8">	
				<CardBody style={{textAlign: "center"}}>
					<CardTitle style={{textTransform: "uppercase", fontWeight: "bolder", textDecoration: "underline"}}>{dog.name}</CardTitle>
					<CardSubtitle>{dog.description}</CardSubtitle>
					<CardText>{dog.size}</CardText>
					<CardText>{dog.breeds.primary}</CardText>
					<CardText>{dog.age}</CardText>
					<CardText>{dog.coat}</CardText>
					<CardText>{dog.environment.children}</CardText>
					<CardText>{dog.environment.dogs}</CardText>
					<CardText>{dog.environment.cats}</CardText>
					<CardText>{dog.contact.address.address1}</CardText>
					<CardText>{dog.contact.address.city}</CardText>
					<CardText>{dog.contact.address.state}</CardText>
					<CardText>{dog.contact.address.postcode}</CardText>
					<CardText>{dog.contact.phone}</CardText>
					<CardText>{dog.contact.email}</CardText>
				</CardBody>
				</div>
				</Row>
			</Card>
		</Container>
    )
}

export default ShelterShow;