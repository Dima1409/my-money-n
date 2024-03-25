import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginForm from "./src/LoginForm";
import RegisterForm from "./src/RegisterForm";
import List from "./src/List";
import HomePage from "./src/HomePage";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import React from "react";

const MainStack = createBottomTabNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Hind-Light": require("./assets/fonts/HindSiliguri-Light.ttf"),
    "Hind-Regular": require("./assets/fonts/HindSiliguri-Regular.ttf"),
    "Hind-Bold": require("./assets/fonts/HindSiliguri-Bold.ttf"),
    "MidimiOne-Regular": require("./assets/fonts/MadimiOne-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName="Login"
          screenOptions={{ tabBarShowLabel: false, headerShown: false }}
        >
          <MainStack.Screen name="Home" component={HomePage} />
          <MainStack.Screen name="Login" component={LoginForm} />
          <MainStack.Screen name="Register" component={RegisterForm} />
          <MainStack.Screen name="History" component={List} />
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d8d5d5",
  },
  view: {
    paddingTop: 100,
    color: "tomato",
    fontSize: 26,
    textAlign: "center",
  },
});

export default App;
