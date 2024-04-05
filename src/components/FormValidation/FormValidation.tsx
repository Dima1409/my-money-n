import * as yup from "yup";
import { ErrorMessage } from "formik";
import { View } from "react-native";
import {
  emailPattern,
  passwordPattern,
  namePattern,
  walletPattern,
  categoryPattern,
} from "../../helpers/patterns";
import React from "react";

const validationLogin = yup.object().shape({
  email: yup
    .string()
    .required("Поле email обов'якове")
    .matches(emailPattern, "Недійсна або неприпустима email-адреса")
    .email(),
  password: yup
    .string()
    .matches(passwordPattern, "Введіть від 6 до 14 символів")
    .required("Поле пароль обов'язкове"),
});

const validationRegister = yup.object().shape({
  name: yup
    .string()
    .required("Поле Ім'я обов'якове")
    .matches(namePattern, "Недійсне або неприпустиме ім'я"),
  email: yup
    .string()
    .required("Поле email обов'якове")
    .matches(emailPattern, "Недійсна або неприпустима email-адреса")
    .email(),
  password: yup
    .string()
    .matches(passwordPattern, "Введіть від 6 до 14 символів")
    .required("Поле пароль обов'язкове"),
});

const validationUpdate = yup.object().shape({
  name: yup
    .string()
    .required("Поле Ім'я обов'якове")
    .matches(namePattern, "Недійсне або неприпустиме ім'я"),
  email: yup
    .string()
    .required("Поле email обов'якове")
    .matches(emailPattern, "Недійсна або неприпустима email-адреса")
    .email(),
});

const validationWalletName = yup.object().shape({
  name: yup.string().matches(walletPattern, "Недоступне ім'я"),
});

const validationCategoryName = yup.object().shape({
  name: yup.string().matches(categoryPattern, "Недоступне ім'я"),
});

const InputError = ({ name }: { name: string }) => {
  return (
    <View>
      <ErrorMessage
        name={name}
        render={(message) => <p style={{ margin: 0 }}>{message}</p>}
      />
    </View>
  );
};

const InputCorrect = ({ name }: { name: string }) => {
  return (
    <View>
      <p style={{ margin: 0 }}>{name}</p>
    </View>
  );
};

const FormValidations = {
  validationLogin,
  validationRegister,
  validationUpdate,
  validationWalletName,
  validationCategoryName,
  InputCorrect,
  InputError,
};

export default FormValidations;
