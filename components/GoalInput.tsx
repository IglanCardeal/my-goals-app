import React, { useState } from 'react';
import { View, Button, StyleSheet, TextInput, Modal } from 'react-native';

interface Props {
  onAddGoal: (title: string) => void;
  onCancel: (bool: boolean) => void;
  showModal: boolean;
}

const GoalInput = (props: Props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const inputGoalHandler = (inputText: string) => {
    setEnteredGoal(inputText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
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
        <View style={styles.buttonsContainer}>
          <View style={styles.addButton}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.cancelButton}>
            <Button
              title="CANCEL"
              color="grey"
              onPress={() => props.onCancel(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 20,
    width: '80%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between'
  },
  addButton: { marginRight: 20, flex: 2, maxWidth: 200, backgroundColor: 'black' },
  cancelButton: { flex: 1, maxWidth: 100 },
});

export default GoalInput;
