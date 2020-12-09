import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const image = require("../../assets/icons/goals-icon.png");

const AppTittle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={image}
          style={styles.image}
          accessibilityLabel="Goals App Icon"
        />
        <Text style={styles.h1}>My Goals App</Text>
        <Text style={styles.h2}>Star adding your goals</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    alignSelf: "center",
    top: -40,
  },

  header: {
    alignItems: "center",
    marginBottom: 0,
  },

  h1: {
    color: "#e8e9eb",
    fontSize: 30,
  },

  h2: {
    fontSize: 20,
    color: "#e8e9eb",
  },

  image: {
    height: 80,
    resizeMode: "contain",
    left: -10,
  },
});

export default AppTittle;
