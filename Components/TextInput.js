import React, { Component } from "react";
import { TextInput, StyleSheet, View, Button } from "react-native";

export default class Input extends Component {
    state = {
      text: ""
    };
    render() {
      return (
        <View style={styles.container}>
          <TextInput style={styles.input}

            placeholder="I have to do..."
  
            value={this.state.text}
  
            placeholderTextColor="#fff"
            
            onChangeText={text => this.setState({ text: text })}
          />
          
        <Button style={styles.butt}             
  
            onPress={() => {
            this.props.onAddTask(this.state.text);
            this.state.text = "";
            }}
  
            title="Add to list"
        />
          
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      height: 70,
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      backgroundColor: "#1f2857"      
    },
    input: {
      color: "white",
      marginLeft: 10
    },  
    butt: {
        marginRight: 10
    }
  });

