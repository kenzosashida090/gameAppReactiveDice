import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constans/colors";
import GameOverScreen from "./screens/GameOverScreen";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [userNumber, setUserNumber] = useState<any>(null);
  const [isOver, setIsOver] = useState<boolean>(true);
  const [counter, setCounter] = useState<number>(0);
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) <AppLoading />;

  const pickedNumber = (pickedNumber: any) => {
    setUserNumber(pickedNumber);
    setIsOver(false);
  };
  let screen = <StartGameScreen pickedNumber={pickedNumber} />;

  if (userNumber) {
    screen = (
      <GameScreen
        setIsOver={setIsOver}
        userNumber={userNumber}
        setCounter={setCounter}
      />
    );
  }
  if (isOver && userNumber)
    screen = (
      <GameOverScreen
        setUserNumber={setUserNumber}
        setCounter={setCounter}
        counter={counter}
        userNumber={userNumber}
      />
    );
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary800, Colors.accent500]}
        style={styles.container}
      >
        <ImageBackground
          source={require("./assets/images.jpg")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
          {/** SafeAreaView will display bellow the hour */}
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
