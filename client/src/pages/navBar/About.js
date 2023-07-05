import React from 'react';
import { Container } from 'react-bootstrap';
import backgroundImage1 from '../../images/background/background.jpg';

const divStyle = {
  color: 'black',
  backgroundColor: '#8d6a9fff',
  padding: '20px',
  fontSize: '20px',
  fontColor: '#030303', // Use camel case for the property name and specify the desired color value
  // backgroundImage: `url(${backgroundImage1})`
};

export default function About() {
  return (
    <Container>
      <div style={divStyle}>
        <h1 className="text-center">About me</h1>
        <p>
          ■ All about Chained Wolfe MetalCrafts 
        </p>
      </div>
    </Container>
  );
}

