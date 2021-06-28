import React from 'react';
import {Container} from 'reactstrap';

const ToDo = () => {
  return(
    <Container className="App">
     <br />
       <h1 className="App-intro">
     In this challenge your goal is to create a to do list: 
       </h1>
       <hr />
       <ul>
         <li>
           ability to accept a task from a user
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
  );
};

export default ToDo



// import React from 'react';
// //import { View, Text, StyleSheet } from 'react-native';
// import {Container} from 'reactstrap';

// const ToDo = (props) => {
//   return(
//     <Container className="App">
//       {/* style={styles.item} */}
//      <br />
    

//        <h1 className="App-intro">
//         To do list: 
//        </h1>
//        <hr />
//        <ul>
//          <li>
//            {/* <Text style = {styles.itemText}>{props.text}</Text> */}
//          </li>
//          <li>
//             ability to add this to the state
//          </li>
//          <li>
//             ability to display all of the tasks
//          </li>
//          <li>
//             ability to evaluated if a task was completed and update the state
//          </li>
//        </ul>
//        <hr />
//      </Container>
   
//   )
// }

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: '#GGG',
//     padding: 15,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   itemText: {
//     maxWidth: '80%',
//   }
// });

//export default ToDo;