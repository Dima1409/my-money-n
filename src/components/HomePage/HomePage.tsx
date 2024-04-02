import { Text, View, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import theme from "../../theme/theme";

const HomePage: React.FC = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/images/money-19.jpg")}
    >
      <View style={styles.wrapper}>
        <Text style={styles.info}>user name</Text>
        <Text style={styles.info}>user email</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  wrapper: {
   marginBottom: 480
  },
  info: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.bold,
  },
});

export default HomePage;
