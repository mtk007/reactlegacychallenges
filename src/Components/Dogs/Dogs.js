import React from 'react';
import {Container} from 'reactstrap';
import DogIndex from './DogIndex';
 
const Dogs = (prop) => {

  const dogsArray = props.dogs.map((dogURL) => {
    return <Dog url={dogURL}/>
  })
  return (
    <Container className="App">
      <br />
      <div>

    {dogsArray} 

      </div>

      <hr />
    </Container>
  
  );

}
 
export default Dogs;