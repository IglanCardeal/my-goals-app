import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

const AppTittle = () => {
  return (
    <View
      style={{
        width: 200,
        alignSelf: "center",
      }}
    >
      <View
        style={{
          alignSelf: "center",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 30 }}>My Goals App</Text>
        <Text style={{ fontSize: 20 }}>Star adding your goals</Text>
      </View>
    </View>
  );
};

export default AppTittle;
