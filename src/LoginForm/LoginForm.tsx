import React, { useState } from "react";
import theme from "../../theme/theme";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const initialState = {
  email: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState(initialState);
  const [focusInput, setFocusInput] = useState<boolean>(false);

  const navigation = useNavigation();

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const hideKeyboard = (): void => {
    setFocusInput(false);
    Keyboard.dismiss();
  };

  const onSubmit = (): void => {
    hideKeyboard();
    alert(`email: ${formData.email}, пароль: ${formData.password}`);
    setFormData(initialState);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require("../../assets/images/money-19.jpg")}
          style={styles.image}
        >
          <View style={{ ...styles.form, marginBottom: focusInput ? 10 : 150 }}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>
                Увійти в існуючий обліковий запис
              </Text>
            </View>
            <View style={styles.input}>
              <TextInput
                onFocus={() => setFocusInput(true)}
                onBlur={() => setFocusInput(false)}
                style={{
                  color: theme.colors.white,
                  fontSize: theme.fontSizes.bold,
                }}
                placeholder="Email"
                placeholderTextColor={theme.colors.white}
                value={formData.email}
                onChangeText={(value) => handleInputChange("email", value)}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                onFocus={() => setFocusInput(true)}
                onBlur={() => setFocusInput(false)}
                style={{
                  color: theme.colors.white,
                  fontSize: theme.fontSizes.bold,
                }}
                placeholder="Пароль"
                placeholderTextColor={theme.colors.white}
                value={formData.password}
                secureTextEntry={true}
                onChangeText={(value) => handleInputChange("password", value)}
              />
            </View>
            <View>
              <TouchableOpacity
                style={[
                  styles.button,
                  formData.email && formData.password
                    ? null
                    : styles.disabledButton,
                ]}
                activeOpacity={0.8}
                onPress={onSubmit}
                disabled={!formData.email || !formData.password}
              >
                <Text
                  style={{
                    fontFamily: theme.fontFamily.mO,
                    color: theme.colors.white,
                    fontSize: theme.fontSizes.normal,
                  }}
                >
                  Увійти
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={[styles.buttonTab]}
            onPress={() => navigation.navigate("Register")}
          >
            <Text
              style={{
                fontFamily: theme.fontFamily.mO,
                color: theme.colors.white,
                fontSize: theme.fontSizes.normal,
                textAlign: "center",
              }}
            >
              Реєстрація
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontFamily: theme.fontFamily.hB,
    textAlign: "center",
    fontSize: theme.fontSizes.extraBold,
    color: theme.colors.white,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
  form: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginHorizontal: 50,
  },
  input: {
    borderColor: theme.colors.transparent,
    borderRadius: 10,
    padding: 14,
    backgroundColor: theme.colors.tomato,
    width: "100%",
    marginBottom: 20,
  },
  button: {
    borderRadius: 6,
    padding: 12,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: theme.colors.green,
  },
  buttonTab: {
    padding: 12,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: theme.colors.green,
  },
  disabledButton: {
    opacity: 0.8,
  },
});

export default LoginForm;
