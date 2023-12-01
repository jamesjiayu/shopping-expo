import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { View } from "react-native-web";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import ShopNavigator from "./navigation/ShopNavigator";
import productsReducer from "./store/reducers/products";
const rootReducer = combineReducers({
  products: productsReducer,
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
