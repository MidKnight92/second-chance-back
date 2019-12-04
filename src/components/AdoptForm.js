import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function AdoptForm() {
    return (
        <Form>
			<h1>Let's Find Your New Member of the Family</h1>
				<FormGroup row>
					<Label sm={2}>Breed</Label>
					<Col sm={10}>
          			<Input type="select" name="breed">
          			<option>1</option>
          			<option>2</option>
          			<option>3</option>
          			<option>4</option>
          			<option>5</option>
          			</Input>
        			</Col>
				</FormGroup>
				<FormGroup row>
					<Label sm={2}>Size</Label>
					<Col sm={10}>
          			<Input type="select" name="size">
          			<option value="small">Small</option>
          			<option value="medium">Medium</option>
          			<option value="large">Large</option>
          			<option value="xlarge">Extra Large</option>
          			</Input>
        			</Col>
				</FormGroup>
				<FormGroup row>
					<Label sm={2}>Age</Label>
					<Col sm={10}>
          			<Input type="select" name="age">
          			<option value="baby">Baby</option>
          			<option value="young">Young</option>
          			<option value="adult">Adult</option>
          			<option value="senior">Senior</option>
          			</Input>
        			</Col>
				</FormGroup>
				<FormGroup row>
					<Label sm={2}>Coat</Label>
					<Col sm={10}>
          			<Input type="select" name="coat">
          			<option value="short">Short</option>
          			<option value="medium">Medium</option>
          			<option value="long">Long</option>
          			<option value="wire">Wire</option>
          			<option value="hairless">Hairless</option>
          			</Input>
        			</Col>
				</FormGroup>
				<FormGroup tag="fieldset" row check>
    			<legend className="col-form-label col-sm-2">Does your dog need to be:</legend>
    			<Col sm={10}>
    				<Label check>
    					<Input type="radio" name="radio1" />{' '}
    					Good with kids? 
    				</Label>
    			</Col>	
    			</FormGroup>
    			<FormGroup tag="fieldset" row check>
    			<Col sm={10}>
    				<Label check>
    					<Input type="radio" name="radio1" />{' '}
    					Good with dogs? 
    				</Label>
    			</Col>	
    			</FormGroup>	
    			<FormGroup tag="fieldset" row check>
    			<Col sm={10}>
    				<Label check>
    					<Input type="radio" name="radio1" />{' '}
    					Good with cats? 
    				</Label>
    			</Col>	
    			</FormGroup>		
		</Form>
    )
}

export default AdoptForm;