// import { StatusBar } from "expo-status-bar";
import LoginForm from "./src/LoginForm";
// import RegisterForm from "./src/RegisterForm";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Hind-Light": require("./assets/fonts/HindSiliguri-Light.ttf"),
    "Hind-Regular": require("./assets/fonts/HindSiliguri-Regular.ttf"),
    "Hind-Bold": require("./assets/fonts/HindSiliguri-Bold.ttf"),
    "MidimiOne-Regular": require("./assets/fonts/MadimiOne-Regular.ttf")
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/money-19.jpg")}
        style={styles.image}
      >
        <LoginForm />
        {/* <RegisterForm /> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d8d5d5",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
  view: {
    paddingTop: 100,
    color: "tomato",
    fontSize: 26,
    textAlign: "center",
  },
});

export default App;
