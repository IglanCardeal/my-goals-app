import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

interface CourseGoals {
  id: string;
  value: string;
}

export default function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoals[]>([]);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = (goalTitle: string) => {
    setCourseGoals((currentGoalsState) => [
      ...currentGoalsState,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setShowModal(false)
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
      <Button title="Add New Goal" onPress={() => modalVisibleHandler(true)} />

      <GoalInput onAddGoal={addGoalHandler} showModal={showModal} onCancel={modalVisibleHandler}/>

      <FlatList
        data={courseGoals}
        renderItem={(renderItem) => (
          <GoalItem
            id={renderItem.item.id}
            title={renderItem.item.value}
            onDelete={onDeleteGoalHandler}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
