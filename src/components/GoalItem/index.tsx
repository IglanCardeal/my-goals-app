import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  id: string;
  title: string;
  onDelete: (id: string) => void;
}

const GoalItem = (props: Props) => {
  return (
    // <TouchableOpacity
    //   onPress={() => props.onDelete(props.id)}
    //   activeOpacity={0.5}
    // >
    //   <View style={styles.listItems}>
    //     <Text>{props.title}</Text>
    //   </View>
    // </TouchableOpacity>
    <View>
      <View style={styles.listItems}>
        <View style={styles.listItemTitle}>
          <Text style={styles.listItemTitleText}>{props.title}</Text>
        </View>

        <View style={styles.listItemsButtons}>
          <View style={styles.finishedButton}>
            <Button
              title="Finished"
              color="green"
              onPress={() => {
                console.log("Finished");
              }}
            />
          </View>
          <View style={styles.editButton}>
            <Button
              title="Edit"
              color="orange"
              onPress={() => {
                console.log("edit");
              }}
            />
          </View>
          <View style={styles.removeButton}>
            <Button
              title="Remove"
              color="red"
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
    backgroundColor: "#3a8e99",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: "column",
    alignItems: "center",
  },

  listItemTitle: {
    flex: 1,
    margin: 10,
  },

  listItemTitleText: {
    fontSize: 20,
    color: 'white'
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
