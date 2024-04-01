import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import LoginForm from "./src/LoginForm";
import RegisterForm from "./src/RegisterForm";
import List from "./src/List";
import HomePage from "./src/HomePage";
import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import theme from "./theme/theme";

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
          screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              position: "absolute",
              bottom: 0,
              right: 0,
              left: 0,
              elevation: 0,
              height: 70,
              backgroundColor: theme.colors.tomato,
              opacity: 0.95,
              borderTopColor: "transparent",
            },
          }}
        >
          <MainStack.Screen
            name="Home"
            component={HomePage}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Entypo
                      name="home"
                      size={focused ? 34 : 28}
                      color={focused ? theme.colors.green : theme.colors.white}
                    ></Entypo>
                    <Text style={{ fontSize: 12, color: theme.colors.white }}>
                      Головна
                    </Text>
                  </View>
                );
              },
            }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginForm}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Entypo
                      name="login"
                      size={focused ? 34 : 28}
                      color={focused ? theme.colors.green : theme.colors.white}
                    ></Entypo>
                    <Text style={{ fontSize: 12, color: theme.colors.white }}>
                      Увійти
                    </Text>
                  </View>
                );
              },
            }}
          />
          <MainStack.Screen
            name="Register"
            component={RegisterForm}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Entypo
                      name="add-user"
                      size={focused ? 34 : 28}
                      color={focused ? theme.colors.green : theme.colors.white}
                    ></Entypo>
                    <Text style={{ fontSize: 12, color: theme.colors.white }}>
                      Реєстрація
                    </Text>
                  </View>
                );
              },
            }}
          />
          <MainStack.Screen
            name="History"
            component={List}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Entypo
                      name="list"
                      size={focused ? 34 : 28}
                      color={focused ? theme.colors.green : theme.colors.white}
                    ></Entypo>
                    <Text style={{ fontSize: 12, color: theme.colors.white }}>
                      Історія
                    </Text>
                  </View>
                );
              },
            }}
          />
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
