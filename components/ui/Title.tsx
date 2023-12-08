import React, { FC } from "react";

import { StyleSheet, Text, View, Platform } from "react-native";
//Plataform API will tell us where does the app run for
interface TitleProps {
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
    //borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }), // another way to set the ios plataform
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
export default Title;
