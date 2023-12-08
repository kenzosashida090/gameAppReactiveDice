import React, { FC } from "react";

import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constans/colors";

interface CardProps {
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return <View style={styles.Inputcontainer}>{children}</View>;
};
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  Inputcontainer: {
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //this only works on android
    shadowColor: "black", // this will apply the shadow on IOS
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
});
export default Card;
