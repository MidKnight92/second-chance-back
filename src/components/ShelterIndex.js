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
// This shows all the dogs currently in shelters the results will be fetched from the PetFinder API
function ShelterIndex(argument) {
    return (
        <Container>
			<h3>Shelter Dogs</h3>
			<h6>These Dogs are currently in shelters near you and they are looking for their forever home.</h6>
			<br/>
			<Row className="no-gutters">
				<CardDeck>
					<Card body outline color="secondary" className="mb-4">
					<div className="col-md-6">
					<CardImg top width="100%" className="rounded" src="https://i.dailymail.co.uk/1s/2019/11/23/09/21370544-7717313-image-a-1_1574501083030.jpg" alt="#"/>
					</div>
					<div className="col-md-8">	
					<CardBody style={{textAlign: "justify"}}>
						<CardTitle style={{textTransform: "uppercase", fontWeight: "bolder", textDecoration: "underline"}}> Dog Name from PetFinder API Results</CardTitle>
						<CardSubtitle>Breed</CardSubtitle>
						<CardText>description</CardText>
						<Button color="primary">Info</Button>
					</CardBody>
					</div>
					</Card>
				</CardDeck>
			</Row>	
		</Container>
    )
}

export default ShelterIndex;