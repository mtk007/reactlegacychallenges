app.js button

import React from 'react';
import './App.css';
import Main from './Components/Main';
import Cats from './Components/Cats/Cats';
import Dogs from './Components/Dogs/Dogs';
import ToDo from './Components/ToDo/ToDo';
import Search from './Components/Search/Search';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function App() {
  const [task, setTask] = useState();
const [taskItems, setTaskItems] = useState([]);

const handleAddTask = () => {
  setTaskItems([...taskItems, task])
  setTask(null);
  setTaskItems(itemsCopy);
}

const completeTask = (index) => {
  let itemsCopy = ([...taskItems]);
  itemsCopy.splice(index, 1);
}
  return (
    <React.Fragment>
      <Main />
{/*       
       <Container style={styles.items}>
       <Container style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>To Do List</Text>
       {
            taskItems.map((item, index) => {
              //return (
              // <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              //  onPress={() => onPress}
           
              // <Task text={item} />
              // </TouchableOpacity>)
            })
}
      <Container />
      <Container />
    <TextInput style={styles.input} placeholder={'Input something to do'} value={task} onChangeText={text => setTask(text)}/> */
    <React.Fragment />
  )
  

{/* const styles = StyleSheet.create({
  tasksWrapper: {},
  sectionTitle: {
    paddingTop: 30,
    paddingHorizontal: 30,
    fontSize: 14,
  },
  items: {
    marginTop: 30,
  },
}); */
}
export default App;
