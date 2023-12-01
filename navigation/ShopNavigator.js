import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native-web";
import Colors from "../constants/Colors";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";

const Stack = createStackNavigator();

const ProductsNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.Primary : "",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.Primary,
        }}
      >
        <Stack.Screen
          name="ProductsOverview"
          component={ProductsOverviewScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProductsNavigator;
