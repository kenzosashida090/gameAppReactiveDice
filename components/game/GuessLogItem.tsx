import React, { FC } from "react";

import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constans/colors";

interface GuessLogItemProps {
  roundNumber: number;
  guess: number;
}

const GuessLogItem: FC<GuessLogItemProps> = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponents Guess: {guess}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
export default GuessLogItem;
