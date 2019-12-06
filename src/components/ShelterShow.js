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



function ShelterShow(argument) {
    return (
        <Container >
			<Card className="mb-3"  body outline color="secondary">
			<Row className="no-gutters">
				<div className="col-md-4">
					<img width="100%" src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80" alt="Dog needing to be adopted from Pet Finder API results"/>
				</div>
				<div className="col-md-8">	
				<CardBody style={{textAlign: "center"}}>
					<CardTitle style={{textTransform: "uppercase", fontWeight: "bolder", textDecoration: "underline"}}>Dogs name</CardTitle>
					<CardSubtitle>animal.description</CardSubtitle>
					<CardText>animal.size</CardText>
					<CardText>animal.breeds</CardText>
					<CardText>animal.age</CardText>
					<CardText>animal.coat</CardText>
					<CardText>environment.children</CardText>
					<CardText>environment.dogs</CardText>
					<CardText>environment.cats</CardText>
					<CardText>contact.address.address1</CardText>
					<CardText>contact.address.city</CardText>
					<CardText>contact.address.state</CardText>
					<CardText>contact.address.postcode</CardText>
					<CardText>contact.phone</CardText>
					<CardLink href="#">contact.email</CardLink>
				</CardBody>
				</div>
				</Row>
			</Card>
		</Container>
    )
}

export default ShelterShow;