import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button} from 'react-native';

import ToDoList from './src/components/ToDoList/ToDoList';

export default class App extends Component {
  state = {
    text: '',
    toDoList: [],
  }

  changeText = (text) => {
    this.setState({text})
  }

  submitText = () => {
    if (!this.state.text.length) {
      return; 
    }

    this.setState(prevState => {
      return { toDoList: prevState.toDoList.concat(prevState.text) };
    });
  }

  render() {  
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput style={styles.input}
            placeholder='Enter text'
            onChangeText={this.changeText}
            value={this.state.text}/>
          <Button style={styles.button}
            title='Add'
            onPress={this.submitText}/>
        </View>
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
  form: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '60%',
  },
  button: {
    width: '40%',
  },
});
