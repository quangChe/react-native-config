import React from 'react';
import {
  FlatList,
  StyleSheet
} from 'react-native';

import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList = (props) => {
  const renderToDo = (info) => <ToDoItem toDo={info.item.text} pressItem={() => props.deleteItem(info.item.key)}/>;

  return (
    <FlatList 
      style={styles.toDoList}
      data={props.toDoItems}
      renderItem={renderToDo}/>
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