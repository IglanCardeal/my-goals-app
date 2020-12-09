import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import GoalItem from "../GoalItem";
import GoalInput from "../GoalInput";
import AppButton from "../AppButton";

interface CourseGoals {
  id: string;
  title: string;
}

export default function Main() {
  // const [courseGoals, setCourseGoals] = useState<CourseGoals[]>([]);
  const [courseGoals, setCourseGoals] = useState<CourseGoals[]>([
    { id: Math.random().toString(), title: "Teste" },
    { id: Math.random().toString(), title: "Teste" },
    { id: Math.random().toString(), title: "Teste" },
    { id: Math.random().toString(), title: "Teste" },
    { id: Math.random().toString(), title: "Teste2" },
  ]);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = (goalTitle: string) => {
    setCourseGoals((currentGoalsState) => [
      ...currentGoalsState,
      { id: Date.now().toString(), title: goalTitle },
    ]);
    setShowModal(false);
  };

  const onDeleteGoalHandler = (id: string) => {
    setCourseGoals((prevState) => {
      return prevState.filter((goal) => goal.id !== id);
    });
  };

  const modalVisibleHandler = (bool: boolean) => {
    setShowModal(bool);
  };

  return (
    <View>
      <AppButton
        title="Add New Goal"
        onPress={() => console.log("Add new goal")}
        size="md"
      />

      <GoalInput
        onAddGoal={addGoalHandler}
        showModal={showModal}
        onCancel={modalVisibleHandler}
      />

      {(courseGoals[0] && (
        <FlatList
          data={courseGoals}
          style={styles.flatList}
          renderItem={(renderItem) => (
            <GoalItem
              id={renderItem.item.id}
              title={renderItem.item.title}
              onDelete={onDeleteGoalHandler}
            />
          )}
        />
      )) || <Text style={styles.infoText}>No goal added yet</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {
    marginVertical: 10,
    width: "100%",
    maxHeight: "80%",
    borderColor: "#e0dfd5",
    borderWidth: 3,
    borderRadius: 10,
  },

  infoText: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: 20,
    color: "#e8e9eb",
  },
});
