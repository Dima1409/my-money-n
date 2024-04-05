import useAuth from "../../hooks/useAuth";
import { View } from "react-native";
import React from "react";

const HomePage: React.FC = () => {
  const { isLoggedIn, isRefreshing, user } = useAuth();
  const isDataLoaded = !isRefreshing && (isLoggedIn || user);
  return <View>main</View>;
};

export default HomePage;
