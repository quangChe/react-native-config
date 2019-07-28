import React from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';

import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList = (props) => {
  const toDoItem = props.toDoItems.map((item, i ) => 
    <ToDoItem key={i} toDo={item} pressItem={() => props.deleteItem(i)}/>
  );

  return (
    <ScrollView style={styles.toDoList}>{ toDoItem }</ScrollView>
  )
}

const styles = StyleSheet.create({
  toDoList: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 26,
  }
})

export default ToDoList;