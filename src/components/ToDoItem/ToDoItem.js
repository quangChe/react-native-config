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
  const Item = 
    <View style={styles.container}>
      <Text>{ props.toDo }</Text>
    </View>;

  return Platform.OS === 'android' 
    ? (<TouchableNativeFeedback onPress={props.pressItem}>{ Item }</TouchableNativeFeedback>)
    : (<TouchableOpacity onPress={props.pressItem}>{ Item }</TouchableOpacity>)
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginTop: 10,
  },
});

export default ToDoItem;