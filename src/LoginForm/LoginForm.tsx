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

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [focusInput, setFocusInput] = useState<boolean>(false);
  const inputHandlerEmail = (text: string) => setEmail(text);
  const inputHandlerPassword = (text: string) => setPassword(text);
  const obj = {
    email: email,
    password: password,
  };

  const hideKeyboard = (): void => {
    setFocusInput(false);
    Keyboard.dismiss();
  };

  const onSubmit = (): void => {
    hideKeyboard();
    alert(`${obj.email} ${obj.password}`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ ...styles.form, marginBottom: focusInput ? 20 : 150 }}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              Увійти в існуючий обліковий запис
            </Text>
          </View>
          <View style={styles.input}>
            <TextInput
              onFocus={() => setFocusInput(true)}
              onBlur={() => setFocusInput(false)}
              style={{ color: theme.colors.white, fontSize: theme.fontSizes.bold }}
              placeholder="Email"
              placeholderTextColor={theme.colors.white}
              value={email}
              onChangeText={inputHandlerEmail}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              onFocus={() => setFocusInput(true)}
              onBlur={() => setFocusInput(false)}
              style={{ color: theme.colors.white, fontSize: theme.fontSizes.bold }}
              placeholder="Пароль"
              placeholderTextColor={theme.colors.white}
              value={password}
              secureTextEntry={true}
              onChangeText={inputHandlerPassword}
            />
          </View>
          <View style={styles.button}>
            <TouchableOpacity activeOpacity={0.8} onPress={onSubmit}>
              <Text style={{ color: theme.colors.white, fontSize: theme.fontSizes.normal }}>Увійти</Text>
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
    marginBottom: 40,
  },
  headerTitle: {
    textAlign: "center",
    fontSize: theme.fontSizes.extraBold,
    fontWeight: '700',
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
    marginBottom: 30,
  },
  button: {
    borderRadius: 6,
    padding: 12,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: theme.colors.green,
  },
});

export default LoginForm;
