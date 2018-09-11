import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class HomePage extends Component {
  static navigationOptions = {
    title: "Home",
    headerRight: (
      <Button onPress={() => alert("This is a button!")} title="Info" />
    )
  };

  render() {
    return (
      <View>
        <Text>This is home page</Text>
        <Button
          title="Goto Counter"
          onPress={() => this.props.navigation.navigate("Counter")}
        />
      </View>
    );
  }
}
