import React, { Component } from 'react';
import { UncontrolledCarousel, Container } from 'reactstrap';

const items = [
  {
    src: 'https://images.unsplash.com/photo-1515803976630-6b3da288c2f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    altText: 'Cute dog running in the snow. Photo by Patrick Hendry on Unsplash',
    caption: 'Register today to find the right dog for you!',
    header: 'Looking to Adopt?',
    key: '1'
  },
  {
    src: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    altText: 'Cute dog name Huey. Photo by Justin Veenema on Unsplash',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: 'https://images.unsplash.com/photo-1424709746721-b8fd0ff52499?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    altText: 'Cute dog at the beach with ball. Photo by Andrew Pons on Unsplash',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Carousel = () => <Container><UncontrolledCarousel className="carousel" items={items}/> </Container>;

export default Carousel;