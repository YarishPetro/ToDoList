import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Input from './Components/TextInput';
import Header from './Components/Header';
import ListWithTasks from './Components/MyFlatList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      tasks: []
    };
  }

  AddTaskHandler = inputText => {
    this.state.id++;

    const tempTasks = [
      ...this.state.tasks, 
      {id: String(this.state.id), text: inputText, isDone: false}
    ];

    this.setState({tasks: tempTasks})
  }

  DeleteTaskHandler = id => {
    const tempTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: tempTasks});
  }

  DoTaskHandler = id => {
    const tempTasks = [...this.state.tasks];
    const index = tempTasks.findIndex(task => task.id == id);

    tempTasks[index] = { ...tempTasks[index] };
    tempTasks[index].isDone = !tempTasks[index].isDone;

    this.setState({ tasks: tempTasks });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Header title = "To Do"/>
        <ListWithTasks
          tasks = {this.state.tasks}
          onDelete={this.DeleteTaskHandler}
          onDoTask={this.DoTaskHandler}
        />
        <Input onAddTask = {this.AddTaskHandler}/>
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
