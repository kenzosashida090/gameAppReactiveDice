import React, { FC, useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  TextInput,
  Alert,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constans/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

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
  const { width, height } = useWindowDimensions(); // THIS IS A HOOK THAT WILL LOOK OUT THE DIMENSIONS WHEN EVER CHANGES
  const marginTopDistance = height < 380 ? 30 : 100;
  const confirmInputHandler = () => {
    if (!isNaN(parseInt(inputNumber)) && parseInt(inputNumber) > 0) {
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
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>DICE GAME</Title>
          <InstructionText style={""}>Enter a number to guess</InstructionText>
          <Card>
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
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  rootContainer: {
    flex: 1,
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
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  instructionText: {
    color: Colors.primary500,
    fontSize: 24,
  },
});
export default StartGameScreen;
