import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet,  
  View, 
} from 'react-native';

import ToDoInput from './src/components/ToDoInput/ToDoInput';
import ToDoList from './src/components/ToDoList/ToDoList';

export default class App extends Component {
  state = {
    toDoList: [],
  }

  submitText = (text) => {
    this.setState(prevState => {
      return { toDoList: prevState.toDoList.concat(text) };
    });
  }

  render() {  
    return (
      <View style={styles.container}>
        <ToDoInput submit={this.submitText}/>
        <ToDoList toDoItems={this.state.toDoList}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
    padding: 26,
  }, 
});
