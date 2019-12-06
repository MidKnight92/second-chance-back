import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Container
} from 'reactstrap';

function RehomeShow(argument) {
	return(
		<Container>
			<Card body outline mb="3" color="secondary">
				<CardBody>
					<CardTitle>Dogs name</CardTitle>
					<img className="center" width="100%" src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80" alt="Dog needing to be adopted from my API results"/>
					<CardSubtitle>dogs.description</CardSubtitle>
					<CardText>dogs.size</CardText>
					<CardText>dogs.age</CardText>
					<CardText>dogs.coat</CardText>
					<CardText>dogs.breeds</CardText>
					<CardText>dogs.children</CardText>
					<CardText>dogs.dogs</CardText>
					<CardText>dogs.cats</CardText>
					<CardText>users.email</CardText>
				</CardBody>
			</Card>
		</Container>
	)
}

export default RehomeShow;