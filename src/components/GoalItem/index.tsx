import React from "react";
import { View, Text, StyleSheet } from "react-native";

import AppButton from "../AppButton";
interface Props {
  id: string;
  title: string;
  onDelete: (id: string) => void;
}

const GoalItem = (props: Props) => {
  return (
    <View>
      <View style={styles.listItems}>
        <View style={styles.listItemTitle}>
          <Text style={styles.listItemTitleText}>{props.title}</Text>
        </View>

        <View style={styles.listItemsButtons}>
          <View style={styles.finishedButton}>
            <AppButton
              title="Finished"
              size="sm"
              color="#f06543"
              onPress={() => {
                console.log("Finished");
              }}
            />
          </View>
          <View style={styles.editButton}>
            <AppButton
              title="Edit"
              size="sm"
              color="#e0dfd5"
              onPress={() => {
                console.log("edit");
              }}
            />
          </View>
          <View style={styles.removeButton}>
            <AppButton
              title="Remove"
              size="sm"
              color="#f7cba1"
              onPress={() => {
                console.log("remove");
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    backgroundColor: "#f09d51",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    flexDirection: "column",
    alignItems: "center",
  },

  listItemTitle: {
    flex: 1,
    margin: 10,
  },

  listItemTitleText: {
    fontSize: 20,
    color: "#313638",
  },

  listItemsButtons: {
    flexDirection: "row",
  },

  editButton: {
    flex: 1,
    marginRight: 20,
  },

  finishedButton: {
    flex: 1,
    marginRight: 20,
  },

  removeButton: {
    flex: 1,
  },
});

export default GoalItem;
