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

function RehomeShow(props) {
	console.log('THIS IS PROPS IN RehomeShow\n', props);
    return (
        <Container>
			<Card body outline mb="3" color="secondary">
			<Row className="no-gutters">
				<div className="col-md-4">
					<img className="center" width="100%" src={`https://cdn11.bigcommerce.com/s-dpaf5pw/images/stencil/original/products/148/658/PawStencilSmallNEW__06609.1544726380.jpg?c=2`} alt="Dog needing to be adopted from my API results"/>
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

// needs to be placed into image tag
// dog.image ? dog.image : 
export default RehomeShow;