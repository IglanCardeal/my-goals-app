import React from "react";
import { StyleSheet, View, StatusBar as SB } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import Header from "./src/components/Header";
import Main from "./src/components/Main";

export default function App() {
  console.log(SB.currentHeight);
  return (
    <View style={styles.screen}>
      <StatusBar style="inverted" animated={true} />

      {/* Adciona efeito de bg gradiente */}
      <LinearGradient
        colors={["#313638", "#313638"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />

      <View style={styles.container}>
        <Header />
        <Main />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },

  container: {
    marginTop: "20%",
  },
});
