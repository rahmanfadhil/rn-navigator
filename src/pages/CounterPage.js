import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class CounterPage extends Component {
  state = {
    counter: 0
  };

  static navigationOptions = {
    title: "Counter"
  };

  increaseCounter = () =>
    this.setState(prev => ({
      counter: prev.counter + 1
    }));

  decreaseCounter = () =>
    this.setState(prev => ({
      counter: prev.counter - 1
    }));

  render() {
    return (
      <View>
        <Text>Current state: {this.state.counter}</Text>
        <Button title="increase" onPress={this.increaseCounter} />
        <Button title="decrease" onPress={this.decreaseCounter} />
      </View>
    );
  }
}
