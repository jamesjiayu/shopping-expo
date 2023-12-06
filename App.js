import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { View } from "react-native-web";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import ShopNavigator from "./navigation/ShopNavigator";
import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
const store = createStore(rootReducer);
const App = () => {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
};

export default App;
