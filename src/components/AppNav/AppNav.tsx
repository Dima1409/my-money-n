import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";
// import List from "../List";
import HomePage from "../HomePage";
import { StyleSheet, View } from "react-native";
import React from "react";
import theme from "../../theme/theme";
import IconTabs from "../../helpers/iconRender";

const MainStack = createBottomTabNavigator();
type IconName = "home" | "login" | "log-out" | "edit" | "add-user" | "list";

const AppNav: React.FC = () => {
  const renderTabIcon =
    (iconName: IconName, text: string) =>
    ({ focused }: { focused: boolean }) => (
      <IconTabs
        title={iconName}
        size={focused ? 30 : 26}
        color={focused ? theme.colors.green : theme.colors.white}
        text={text}
        focus={focused}
      />
    );

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
            options={{ tabBarIcon: renderTabIcon("home", "Головна") }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginForm}
            options={{ tabBarIcon: renderTabIcon("login", "Увійти") }}
          />
          <MainStack.Screen
            name="Register"
            component={RegisterForm}
            options={{ tabBarIcon: renderTabIcon("add-user", "Реєстрація") }}
          />
          {/* <MainStack.Screen
            name="History"
            component={List}
            options={{ tabBarIcon: renderTabIcon("list", "Історія") }}
          /> */}
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

export default AppNav;
