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

function RehomeShow(argument) {
    return (
        <Container>
			<Card body outline mb="3" color="secondary">
			<Row className="no-gutters">
				<div className="col-md-4">
					<img className="center" width="100%" src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80" alt="Dog needing to be adopted from my API results"/>
				</div>
				<div className="col-md-8">	
				<CardBody style={{textAlign: "center"}}>
					<CardTitle style={{textTransform: "uppercase", fontWeight: "bolder", textDecoration: "underline"}}>Dogs name</CardTitle>
					<CardSubtitle>dogs.description</CardSubtitle>
					<CardText>dogs.size</CardText>
					<CardText>dogs.age</CardText>
					<CardText>dogs.coat</CardText>
					<CardText>dogs.breeds</CardText>
					<CardText>dogs.children</CardText>
					<CardText>dogs.dogs</CardText>
					<CardText>dogs.cats</CardText>
					<CardLink href='#'>users.email</CardLink>
				</CardBody>
				</div>
				</Row>
			</Card>
		</Container>
    )
}

export default RehomeShow;