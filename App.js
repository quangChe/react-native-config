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
  }

  changeText = (text) => {
    this.setState({text})
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
