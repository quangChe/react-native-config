import React from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

const ToDoItem = (props) => {
  const pressItem = () => props.pressItem(props.toDo);
  const Item = <View style={styles.container}><Text>{ props.toDo }</Text></View>;

  return Platform.OS === 'android' 
    ? (<TouchableNativeFeedback onPress={pressItem}>{ Item }</TouchableNativeFeedback>)
    : (<TouchableOpacity onPress={pressItem}>{ Item }</TouchableOpacity>)
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
    width: '100%',
    marginTop: 10,
  },
});

export default ToDoItem;