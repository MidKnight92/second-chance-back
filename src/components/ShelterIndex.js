import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, CardDeck, Row, Col
} from 'reactstrap'

// Component Description (Public):
// This shows all the dogs currently in shelters the results will be fetched from the PetFinder API
function ShelterIndex(argument) {
	return(
		<Container sm="1" md="4" lg="6">
			<h3>Shelter Dogs</h3>
			<h6>These Dogs are currently in shelters near you and they are looking for their forever home.</h6>
			<br/>
			<Row sm="1" md="2" lg="4">
				<CardDeck>
					<Card body outline color="secondary">
					<CardImg top width="100" className="rounded" src="https://i.dailymail.co.uk/1s/2019/11/23/09/21370544-7717313-image-a-1_1574501083030.jpg" alt="#"/>	
					<CardBody>
						<CardTitle> Dog Name from PetFinder API Results</CardTitle>
						<CardSubtitle>Breed</CardSubtitle>
						<CardText>description</CardText>
						<Button>Info</Button>
					</CardBody>
					</Card>
				</CardDeck>
			</Row>	
		</Container>
	)
}

export default ShelterIndex;