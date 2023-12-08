import React, { FC } from "react";

import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constans/colors";

interface InstructionTextProps {
  children: React.ReactNode;
  style: {};
}

const InstructionText: FC<InstructionTextProps> = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};
const styles = StyleSheet.create({
  instructionText: {
    color: Colors.primary500,
    fontSize: 24,
  },
});
export default InstructionText;
