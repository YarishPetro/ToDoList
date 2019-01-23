import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, CheckBox, Button, TouchableOpacity  } from "react-native";

export default class ListWithTasks extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data = {this.props.tasks}

                    keyExtractor = {(item) => item.id.toString()}

                    renderItem = {({item}) => (
                    
                    <View style={styles.innerContainer}>
                        
                        <Text style={styles.text}> {item.text} </Text>

                        <View style = {{ flex: 1 }}>
                            <CheckBox 
                                value={item.isDone}
                                onValueChange={() => this.props.onDoTask(item.id)}
                            />  
                        </View>

                        <TouchableOpacity style = {{flex: 1}}
                             onPress={() => this.props.onDelete(item.id)}>
                            <Text style = {{fontSize: 20}}>{"X"}</Text>
                        </TouchableOpacity>
                    </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#D9D9D9"
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginTop: 10,
    width: "87%",
    height: "10%"
  },
  text: {
    flex: 4,
    fontSize: 25,
  },
});
