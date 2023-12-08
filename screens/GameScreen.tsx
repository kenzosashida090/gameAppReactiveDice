import React, { FC, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

interface GameScreenProps {
  userNumber: string;
  setIsOver: any;
  setCounter: any;
}
const generateRandomBetween: any = (
  min: number,
  max: number,
  exclude: number
) => {
  let randomNumber = Math.floor(Math.random() * max) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};
let minBoundary = 1;
let maxBoundary = 100;
const GameScreen: FC<GameScreenProps> = ({
  userNumber,
  setIsOver,
  setCounter,
}) => {
  const rndNumber = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(rndNumber);
  const [guessRounds, setGuessRounds] = useState<string[]>([rndNumber]);
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    if (currentGuess === Number(userNumber)) {
      setIsOver(true);
    }
  }, [currentGuess, userNumber, setIsOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  const nextGuessHandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < Number(userNumber)) ||
      (direction === "greater" && currentGuess > Number(userNumber))
    ) {
      Alert.alert("Dont lie!", "This is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "greater") {
      minBoundary = currentGuess + 1;
    } else if (direction === "lower") {
      maxBoundary = currentGuess;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setCounter((prevCount: number) => prevCount + 1);
    setGuessRounds((prev) => [...prev, newRandomNumber]);
  };
  const guessRoundsListLength = guessRounds.length;
  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          {" "}
          Higher or Lower?
        </InstructionText>
        <View style={styles.containerButton}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );
  if (width > 500) {
    content = (
      <>
        <View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>;
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.container}>
      <Title>Opponents Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - index}
              guess={Number(item)}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignContent: "center",
    alignItems: "center",
  },
  buttonContainerWide: {
    flexDirection: "row",
    alignItems: "center", //this will align vertically to the center
  },
  instructionText: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
    alignContent: "center",
  },
  containerButton: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  textStyle: {
    color: "#fff",
    textAlign: "center",
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
export default GameScreen;
