import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button} from 'react-native';

export default class App extends Component {
  state = {
    text: '',
    toDoList: [],
  }

  changeText = (text) => {
    this.setState({text})
  }

  submitText = () => {
    this.setState(prevState => {
      return (prevState.text.length) 
        ? { toDoList: prevState.toDoList.concat(prevState.text) }
        : null;
    });
  }

  render() {
    const ToDoList = this.state.toDoList.map((text, i) => 
      <Text key={i}>{ text }</Text>
    );

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
        <View>
          {ToDoList}
        </View>
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
  }, 
  form: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    width: '60%',
  },
  button: {
    width: '40%',
  }
});
