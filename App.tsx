import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/redux/store";
import { useFonts } from "expo-font";
import AppNav from "./src/components/AppNav/AppNav";
import React from "react";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Hind-Light": require("./src/assets/fonts/HindSiliguri-Light.ttf"),
    "Hind-Regular": require("./src/assets/fonts/HindSiliguri-Regular.ttf"),
    "Hind-Bold": require("./src/assets/fonts/HindSiliguri-Bold.ttf"),
    "MidimiOne-Regular": require("./src/assets/fonts/MadimiOne-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNav />
      </PersistGate>
    </Provider>
  );
};

export default App;
