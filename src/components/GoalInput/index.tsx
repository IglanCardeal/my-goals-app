import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, Modal, Text } from "react-native";
import { RadioButton } from "react-native-paper";

interface Props {
  onAddGoal: (title: string) => void;
  onCancel: (bool: boolean) => void;
  showModal: boolean;
}

const GoalInput = (props: Props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [checked, setChecked] = React.useState("first");

  const inputGoalHandler = (inputText: string) => {
    setEnteredGoal(inputText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  // separar este container dos radio buttons
  const RadioButtonsContainer = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
          }}
        >
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            uncheckedColor="lightgrey"
            color="red"
            onPress={() => setChecked("first")}
          />
          <Text style={{ color: "white" }}>Urgent</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
          }}
        >
          <RadioButton
            value="second"
            uncheckedColor="lightgrey"
            color="orange"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text>Important</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
          }}
        >
          <RadioButton
            value="second"
            uncheckedColor="lightgrey"
            color="blue"
            status={checked === "third" ? "checked" : "unchecked"}
            onPress={() => setChecked("third")}
          />
          <Text>For the future</Text>
        </View>
      </View>
    );
  };

  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          onChangeText={inputGoalHandler}
          value={enteredGoal}
        />

        {RadioButtonsContainer()}

        <View style={styles.buttonsContainer}>
          <View style={styles.cancelButton}>
            <Button
              title="CANCEL"
              color="grey"
              onPress={() => props.onCancel(false)}
            />
          </View>
          <View style={styles.addButton}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: "5%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3a8e99",
  },

  input: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginBottom: 20,
    color: "white",
    width: "80%",
  },

  buttonsContainer: {
    flexDirection: "row",
    width: "60%",
  },

  addButton: {
    justifyContent: "space-between",
    marginLeft: 20,
    flex: 2,
    maxWidth: 200,
    backgroundColor: "black",
  },

  cancelButton: { flex: 1, maxWidth: 100 },
});

export default GoalInput;
