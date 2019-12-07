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
class RehomeIndex extends Component {
	constructor() {
		super();
		this.state = {
			dog: null
		}
	}
	componentDidMount() {
        this.getDogs();
    }
    getDogs = async (req, res) => {
        try {
            const dogs = await fetch(process.env.REACT_APP_API_URL + '/dogs/rehome', {
                credentials: 'include',
                method: "GET"
            });
            const parsedDogs = await dogs.json();
            console.log(parsedDogs);
            this.setState({
                dogs: parsedDogs
            })
        } catch (err) {
            console.log(err)
        }
    }
    render(){
    	let dogs 
    	{this.state.dogs 
    		?
    		dogs = this.state.dogs.map((dog) => {
    			console.log(dog);
				return(
					<CardDeck key={dog._id} className="no-gutters">
						<Card body outline color="secondary" className="mb-4" >
						<CardBody style={{textAlign: "justify"}}>
						<div className="col-md-6">
						<CardImg top width="100%" className="rounded" src={dog.image ? dog.image : `https://cdn11.bigcommerce.com/s-dpaf5pw/images/stencil/original/products/148/658/PawStencilSmallNEW__06609.1544726380.jpg?c=2`} alt="Cute Puppy"/>
						</div>
							<CardTitle style={{textTransform: "uppercase", fontWeight: "bolder", textDecoration: "underline"}}>{dog.name}</CardTitle>
							<CardSubtitle>{dog.breed}</CardSubtitle>
							<Button color="primary" onClick={() => this.props.history.push(`/dogs/rehome/${dog._id}`, dog)}>Info</Button>
						</CardBody>
						</Card>
					</CardDeck>
		    	)
    		})
    		:
    		dogs = null
    	}
    return (
        <Container >
		<h3>Rehome Dogs</h3>
		<h6>These Dogs are currently in homes and they are looking for their forever home.</h6>
			<br/>
			{ dogs }
		</Container>
    )
   }

}
// <CardText>{dog.description}</CardText>
export default RehomeIndex;