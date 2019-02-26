import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Singleton from "../../app/constans/Singleton";

export default class HomeScreen extends Component<any, any> {
  //TODO:func click_GoSetting
  click_GoSetting() {
    let commonData = Singleton.getInstance();
    commonData.setEmailId("onlyappasaheb4@gamil.com");
    this.props.navigation.push("SettingsScreen");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>

        <Button title="Setting" onPress={() => this.click_GoSetting()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
