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
} from "react-native";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState(initialState);
  const [focusInput, setFocusInput] = useState<boolean>(false);

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
    alert(
      `ім'я: ${formData.name}, email: ${formData.email}, пароль: ${formData.password}`
    );
    setFormData(initialState);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ ...styles.form, marginBottom: focusInput ? 10 : 150 }}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              Створити новий обліковий запис
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
              placeholder="Ім'я"
              placeholderTextColor={theme.colors.white}
              value={formData.name}
              onChangeText={(value) => handleInputChange("name", value)}
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
                  color: theme.colors.white,
                  fontSize: theme.fontSizes.normal,
                }}
              >
                Створити
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
    textAlign: "center",
    fontSize: theme.fontSizes.extraBold,
    fontWeight: "700",
    color: theme.colors.white,
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
  disabledButton: {
    opacity: 0.8,
  },
});

export default RegisterForm;