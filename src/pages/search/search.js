import React, { Component } from "react";
import { View, Text } from "react-native";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#eee",
          justifyContent: "center"
        }}
      >
      <Text>
        Search
      </Text>
      </View>
    );
  }
}