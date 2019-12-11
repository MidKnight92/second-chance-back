import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardDeck,
    CardLink,
    CardTitle,
    CardSubtitle,
    Container,
    Button,
    Row
} from 'reactstrap';
import { Link } from 'react-router-dom';

function UserMatches(props) {
    console.log(props)
    console.log(props.location.state.dogs.animals);
    const doggies = props.location.state.dogs.animals;
    if (doggies.length > 0) {
        const dogs = doggies.map((dog) => {
            return (
                <Container key={dog.id} style={{marginBottom: "5%"}}>
                <Card body outline color="secondary" className="mb-4" style={{background: 'rgb(242,243,245)'}}>
                    <Row className="no-gutters">
                    <div className="col-md-4">
                        <CardImg top width="100%" className="rounded" src={dog.photos.length > 0 ? dog.photos[0].medium : `https://cdn11.bigcommerce.com/s-dpaf5pw/images/stencil/original/products/148/658/PawStencilSmallNEW__06609.1544726380.jpg?c=2`} alt="Cute Puppy"/>
                    </div>
                    <div className="col-md-8" >
                    <CardBody style={{textAlign: "justify"}}>
                        <CardTitle style={{textTransform: "uppercase", fontWeight: "bolder", textDecoration: "underline"}}>{dog.name}</CardTitle>
                        <CardSubtitle>{dog.breeds.primary}</CardSubtitle>
                        <CardText>{dog.description}</CardText>
                        <CardText>{dog.age}</CardText>
                        <CardText>{dog.size}</CardText>
                        <CardText>{dog.contact.email}</CardText>
                        <CardText>{dog.environment.children ? 'Great with Children' : 'Prefers not to be around younger children. Older children/adults are preferred'}</CardText>
                        <CardText>{dog.environment.dogs ? 'Great with other dogs' : 'Prefers to be the only dog'}</CardText>
                        <CardText>{dog.environment.cats ? 'Great with cats' : 'Prefers not to be around cats'}</CardText>
                    </CardBody>
                    </div>
                    </Row>
                </Card>
            </Container>
            )
        })
        return dogs

    } else {
        return (
            <Container style={{textAlign: "center"}}>
            <h1> Your criteria did not match with any of our dogs.</h1>
            <h3> Please refine your search.</h3>
            <img className="center" width="50%" className="rounded" src={`https://spectrum.ieee.org/image/Mjk3NjgzNQ.jpeg`} alt="Sony Aibo Robot Dog "/>
            <h6>Photo:Sony</h6>
            <h6 style={{marginTop: '2%'}}>Click the button below to find real dogs. Otherwise, here is your best match: Sony Aibo Robot Dog </h6>
            <Button style={{marginTop: '2%'}} color="primary" onClick={() => props.history.goBack('/dogs/adopt')}>Change Search Criteria</Button>
            </Container>
        )
    }
}




// this.props.history.goBack(`/users/${this.state.user._id})

// dog.good_with_children ? 'Great with Children' : 'Prefers not to be around younger children. Older children/adults are preferred'

export default UserMatches;