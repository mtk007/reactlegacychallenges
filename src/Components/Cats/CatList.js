import React, { Component } from 'react';
 
const CatList = (props) => {
 
  return (
   <div className="breeds">
     {props.cats.map((breeds) => <li>{breeds}</li> )}
   </div>
 )
}



export default CatList;