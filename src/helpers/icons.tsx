import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";

type IconName = "eye" | "eye-with-line";
interface IconProps {
  title: IconName;
  size: number;
  color: string;
}

const Icon: React.FC<IconProps> = ({ title, size, color }) => {
  return (
    <View>
      <Entypo name={title} size={size} color={color} />
    </View>
  );
};

export default Icon;
