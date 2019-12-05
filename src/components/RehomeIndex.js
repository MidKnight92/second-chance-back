import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, CardDeck, Row, Col
} from 'reactstrap'

function RehomeIndex(argument) {
	return(
		<Container sm="1" md="4" lg="6">
			<Row sm="1" md="2" lg="4">
				<CardDeck>
					<Card body outline color="secondary">
					<CardImg top width="100" className="rounded" src="https://i.dailymail.co.uk/1s/2019/11/23/09/21370544-7717313-image-a-1_1574501083030.jpg" alt="#"/>	
					<CardBody>
						<CardTitle>Name from api props</CardTitle>
						<CardSubtitle>CardSubtitle</CardSubtitle>
						<CardText>description</CardText>
						<Button>Info</Button>
					</CardBody>
					</Card>
				</CardDeck>
			</Row>	
		</Container>
	)
}

export default RehomeIndex;