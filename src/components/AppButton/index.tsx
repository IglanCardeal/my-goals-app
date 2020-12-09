import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  onPress: () => void;
  title: string;
  size: "md" | "sm";
  color?: string;
}

export default ({ onPress, title, size, color }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[
        styles.button,
        (size === "md" && { width: 200 }) || (size === "sm" && { width: 100 }),
        color !== undefined && { backgroundColor: color },
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f09d51",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    padding: 10,
    alignItems: "center",
    alignSelf: "center",
  },

  buttonText: {
    fontSize: 18,
    color: "#313638",
    alignSelf: "center",
  },
});
