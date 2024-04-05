import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import {
  logout,
  editUser,
  refreshUser,
  updateUserAvatar,
  deleteAvatar,
} from "../../redux/Auth/operations";
import { useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import theme from "../../theme/theme";
import useToggle from "../../hooks/useToggle";
import ModalView from "../Modal/Modal";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import React from "react";
import IconTabs from "../../helpers/iconRender";

const UserMenu: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { isLoggedIn, user } = useAuth();
  const { name, email, avatarURL } = user;
  const initialState = {
    name: user.name,
    email: user.email,
  };
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showAvatarInfo, setShowAvatarInfo] = useState(false);
  const [avatar, setAvatar] = useState(avatarURL);
  const { isOpen, close, toggle } = useToggle();
  const imageExtensions = ["png", "jpg", "jpeg", "webp"];

  //   const handleChooseAvatar = async () => {
  //     const permissionResult =
  //       await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     if (permissionResult.granted === false) {
  //       Alert.alert(
  //         "Permission required",
  //         "Please grant permission to access the photo library."
  //       );
  //       return;
  //     }

  //     const result = await ImagePicker.launchImageLibraryAsync();
  //     if (!result.canceled && result.assets) {
  //       // Ensure result.uri exists before proceeding
  //       setAvatar(result.assets);
  //       await dispatch(updateUserAvatar({ avatarURL: result.assets }));
  //       dispatch(refreshUser());
  //     }
  //   };

  //   const handleDeleteAvatar = async () => {
  //     await dispatch(deleteAvatar());
  //     setAvatar(null);
  //     dispatch(refreshUser());
  //   };

  const handleLogOut = async () => {
    Alert.alert("Вийти", "Вийти з облікового запису?", [
      {
        text: "Відмінити",
        style: "cancel",
      },
      {
        text: "Вийти",
        onPress: () => dispatch(logout()),
      },
    ]);
  };

  const handleSubmit = async (values: typeof initialState) => {
    dispatch(
      editUser({
        name: values.name,
        email: values.email,
      })
    );
    close();
  };

  type IconName = "home" | "login" | "log-out" | "edit" | "add-user" | "list";

  const renderIcon =
    (iconName: IconName, text: string) =>
    ({ focused }: { focused: boolean }) => (
      <IconTabs
        title={iconName}
        size={30}
        color={focused ? theme.colors.green : theme.colors.white}
        text={text}
        focus={focused}
      />
    );

  return (
    <>
      {isLoggedIn && (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {avatar ? (
            <TouchableOpacity>
              <Image
                source={{ uri: avatar }}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/money-19.jpg")}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            </TouchableOpacity>
          )}
          <Text>{user.name}</Text>
          <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity onPress={handleLogOut}></TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default UserMenu;
