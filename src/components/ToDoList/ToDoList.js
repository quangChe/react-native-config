import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList = (props) => {
  const aTest = (val) => alert(val);
  const toDoItem = props.toDoItems.map((item, i ) => 
    <ToDoItem key={i} toDo={item} pressItem={aTest}/>
  );

  return (
    <View style={styles.toDoList}>{ toDoItem }</View>
  )
}

const styles = StyleSheet.create({
  toDoList: {
    width: '100%',
    flex: 1,
  }
})

export default ToDoList;