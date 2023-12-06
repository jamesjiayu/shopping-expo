import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  ScrollView,
  View,
} from "react-native-web";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import * as cartActions from "../../store/actions/cart";
import { HeaderButton } from "react-navigation-header-buttons"; //p148 8.11 about header
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
const CustomHeaderButton = (props) => {
  // const productId = props.navigation.getParam("productId");

  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : Colors.Primary}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  paragraph: {
    margin: 8,
    fontSize: 16,
    textAlign: "center",
  },
  h1: {
    margin: 28,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  h2: {
    margin: 16,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default CustomHeaderButton;
