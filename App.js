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
        <TextInput style={{width: 300, padding: 10}}
          placeholder='Enter text'
          onChangeText={this.changeText}
          value={this.state.text}/>
        <Button title='Add'/>

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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
