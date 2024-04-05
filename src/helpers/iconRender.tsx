import { Text, View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import theme from "../theme/theme";

type IconName = "home" | "login" | "log-out" | "edit" | "add-user" | "list";

interface IconTabsProps {
  title: IconName;
  size: number;
  color: string;
  text: string;
  focus: boolean;
}

const IconTabs: React.FC<IconTabsProps> = ({
  title,
  size,
  color,
  text,
  focus,
}) => {
  return (
    <View style={styles.container}>
      <Entypo name={title} size={size} color={color} />
      <Text style={[styles.text, focus ? styles.focusedText : null]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    color: theme.colors.white,
    fontWeight: "600",
  },
  focusedText: {
    fontWeight: "600",
    fontSize: 13,
    color: theme.colors.white,
  },
});

export default IconTabs;
