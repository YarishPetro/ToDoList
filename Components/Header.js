import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {this.props.title} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f2857",  
  },
  title: {
    fontSize: 30,
    margin: 10,
    fontStyle: "italic",
    textAlign: "center",
    color: "white"
  }
});
