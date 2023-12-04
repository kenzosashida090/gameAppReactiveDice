import React, { FC, useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

interface StartGameScreenProps {
  pickedNumber: any;
}

const StartGameScreen: FC<StartGameScreenProps> = ({ pickedNumber }) => {
  const [inputNumber, setInputNumber] = useState<string>("");
  const handleInputValue = (enteredText: string) => {
    setInputNumber(enteredText);
  };
  const resetHandler = () => {
    setInputNumber("");
  };
  const confirmInputHandler = () => {
    if (!isNaN(parseInt(inputNumber)) && inputNumber.length > 0) {
      pickedNumber(inputNumber);
    } else {
      Alert.alert("Error", "Please enter a valid number", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetHandler,
        },
      ]);
      return;
    }
  };
  return (
    <View style={styles.Inputcontainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleInputValue}
        value={inputNumber}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Inputcontainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 4, //this only works on android
    shadowColor: "black", // this will apply the shadow on IOS
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default StartGameScreen;
