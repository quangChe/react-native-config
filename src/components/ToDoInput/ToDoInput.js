import React, {Component} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

export default class ToDoInput extends Component {
  state = {
    text: ''
  };

  changeText = (text) => {
    this.setState({text})
  }

  submitInput = () => {
    if (!this.state.text.length) {
      return; 
    }

    return this.props.submit(this.state.text);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder='Enter text'
          onChangeText={this.changeText}
          value={this.state.text}/>
        <Button 
          color='#29AB87'
          style={styles.button}
          title='Add'
          onPress={this.submitInput}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 26,
  },
  input: {
    width: '82%',
    borderBottomWidth: 1.5,
    borderBottomColor: '#ffcf74',
    paddingBottom: 10,
  },
  button: {
    width: '18%',
  },
});