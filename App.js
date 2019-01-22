import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Input from './Components/TextInput';
import Header from './Components/Header';
import MyFlatList from './Components/MyFlatList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.tasks = [];
    this.state = { id: 0, inputText: '', isDone: false};
}
  render() {
    return (
      <View style={styles.container}>
        <Header title = "To Do"/>
        {/*There will be  
        MyFlatList
        TextInput */}
        <Input/>
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  }
});