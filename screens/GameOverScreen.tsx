import React, { FC } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constans/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

interface GameOverScreenProps {
  setUserNumber: any;
  counter: number;
  setCounter: any;
  userNumber: string;
}

const GameOverScreen: FC<GameOverScreenProps> = ({
  setUserNumber,
  counter,
  setCounter,
  userNumber,
}) => {
  const { width, height } = useWindowDimensions();
  let imageSize = 100;
  if (width < 300) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}> {counter} </Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}> {userNumber} </Text> .
        </Text>
        {/**WE CAN NEST TEXT */}
        <PrimaryButton
          onPress={() => {
            setUserNumber(null);
            setCounter(0);
          }}
        >
          Start New Game
        </PrimaryButton>
      </View>
    </ScrollView>
  );
};

//const deviceWidth = Dimensions.get("window").width; this when we want to obtain the dimensions of the actual mobile
const styles = StyleSheet.create({
  textGame: {
    color: "#fff",
    textAlign: "center",
    flex: 1,
    flexDirection: "row",
  },
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center", //center horizontal
    justifyContent: "center", // center vertically
  },
  imageContainer: {
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 34,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    textAlign: "center",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
export default GameOverScreen;
