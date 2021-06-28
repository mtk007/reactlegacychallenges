import { prependOnceListener } from 'process';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Container} from 'reactstrap';

const Task = (props) => {
  return(
    <Container className="App">
     <br />
     <Container style={styles.item}>

       <h1 className="App-intro">
        To do list: 
       </h1>
       <hr />
       <ul>
         <li>
           <Text style = {styles.itemText}>{props.text}</Text>
         </li>
         <li>
            ability to add this to the state
         </li>
         <li>
            ability to display all of the tasks
         </li>
         <li>
            ability to evaluated if a task was completed and update the state
         </li>
       </ul>
       <hr />
     </Container>
     </Container>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#GGG',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    maxWidth: '80%',
  }
});

export default Task;