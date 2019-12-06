import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
    CardDeck,
    Row,
    Col
} from 'reactstrap'

// Component Description (Public):
// This shows a lists of dogs that are not in shelters but are in need of being rehomed.
function RehomeIndex(argument) {
    return (
        <Container sm="1" md="4" lg="6">
		<h3>Rehome Dogs</h3>
		<h6>These Dogs are currently in homes and they are looking for their forever home.</h6>
			<Row sm="1" md="2" lg="4">
				<CardDeck>
					<Card body outline color = "secondary">
					<CardImg top width="100" className="rounded" src="https://i.dailymail.co.uk/1s/2019/11/23/09/21370544-7717313-image-a-1_1574501083030.jpg" alt="#"/>	
					<CardBody>
						<CardTitle> Dog Name from my API results</CardTitle>
						<CardSubtitle>Breed</CardSubtitle>
						<CardText>description</CardText>
						<Button color="primary">Info</Button>
					</CardBody>
					</Card>
				</CardDeck>
			</Row>	
		</Container>
    )
}

export default RehomeIndex;