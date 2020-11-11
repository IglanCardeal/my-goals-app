import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';

interface Props {
  id: string;
  title: string;
  onDelete: (id: string) => void;
}

const GoalItem = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onDelete(props.id)}
      activeOpacity={0.5}
    >
      <View style={styles.listItems}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default GoalItem;
