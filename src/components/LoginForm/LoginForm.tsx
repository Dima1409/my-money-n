import React, { useState } from "react";
import theme from "../../theme/theme";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ImageBackground,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { Formik, FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { login } from "../../redux/Auth/operations";
import FormValidations from "../FormValidation/FormValidation";

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

const LoginForm: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [focusInput, setFocusInput] = useState<boolean>(false);
  const { validationLogin } = FormValidations;

  // const onSubmit = async (
  //   values: FormValues,
  //   { resetForm }: FormikHelpers<FormValues>
  // ) => {
  //   dispatch(login(values)).then((res) => {
  //     if (res.payload.user) {
  //       Alert.alert("Login");
  //       resetForm();
  //     } else {
  //       Alert.alert("Incorrect email or password");
  //     }
  //   });
  // };

  const hideKeyboard = (): void => {
    setFocusInput(false);
    Keyboard.dismiss();
  };

  const onSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    hideKeyboard();
    dispatch(login(values)).then((res) => {
      Alert.alert(res.payload);
      if (res.payload.user) {
        Alert.alert("Вхід");
        resetForm();
      } else {
        Alert.alert("Неправильний e-mail або пароль");
        // Alert.alert(values.email, values.password);
      }
      return;
    });
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationLogin}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <View style={styles.form}>
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>
                    Увійти в існуючий обліковий запис
                  </Text>
                </View>
                <View style={styles.input}>
                  <TextInput
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => setFocusInput(false)}
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor={theme.colors.white}
                    onChangeText={formik.handleChange("email")}
                    value={formik.values.email}
                    keyboardType="email-address"
                  />
                </View>
                <View style={styles.input}>
                  <TextInput
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => setFocusInput(false)}
                    style={styles.inputText}
                    placeholder="Пароль"
                    placeholderTextColor={theme.colors.white}
                    onChangeText={formik.handleChange("password")}
                    value={formik.values.password}
                    secureTextEntry
                  />
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={formik.handleSubmit as () => void}
                  disabled={!formik.isValid}
                >
                  <Text style={styles.buttonText}>Увійти</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
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
    justifyContent: "center",
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
  inputText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.bold,
  },
  button: {
    borderRadius: 6,
    padding: 12,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: theme.colors.green,
    opacity: 0.8,
  },
  buttonText: {
    fontFamily: theme.fontFamily.mO,
    color: theme.colors.white,
    fontSize: theme.fontSizes.normal,
  },
});

export default LoginForm;
