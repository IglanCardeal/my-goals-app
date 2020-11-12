import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./src/components/GoalItem";
import GoalInput from "./src/components/GoalInput";
import AppTitle from "./src/components/AppTitle";

interface CourseGoals {
  id: string;
  title: string;
}

export default function App() {
  // const [courseGoals, setCourseGoals] = useState<CourseGoals[]>([]);
  const [courseGoals, setCourseGoals] = useState<CourseGoals[]>([
    { id: Math.random().toString(), title: "Teste" },
    { id: Math.random().toString(), title: "Teste" },
    { id: Math.random().toString(), title: "Teste" },
    { id: Math.random().toString(), title: "Teste" },
    { id: Math.random().toString(), title: "Teste" },
    { id: Math.random().toString(), title: "Teste" },
    { id: Math.random().toString(), title: "Teste" },
    { id: Math.random().toString(), title: "Teste" },
    { id: Math.random().toString(), title: "Teste" },
    { id: Math.random().toString(), title: "Teste" },
    { id: Math.random().toString(), title: "Teste" },
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
    <View style={styles.screen}>
      <StatusBar style="dark" animated={true} />

      <LinearGradient
        colors={["#06beb6", "#48b1bf"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />

      <View style={{ marginVertical: 80 }}>
        <AppTitle />

        <Button
          title="Add New Goal"
          onPress={() => modalVisibleHandler(true)}
        />

        <GoalInput
          onAddGoal={addGoalHandler}
          showModal={showModal}
          onCancel={modalVisibleHandler}
        />

        {courseGoals[0] && (
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
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    marginTop: "auto",
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  flatList: { marginTop: 20, width: "100%" },
});
