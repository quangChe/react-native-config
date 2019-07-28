import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const ToDoItem = (props) => (
  <View  style={styles.container}>
    <Text> { props.toDo } </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
    width: '100%',
    marginTop: 10,
  },
});

export default ToDoItem;