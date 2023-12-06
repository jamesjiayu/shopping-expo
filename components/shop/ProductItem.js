import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { FlatList, Image, Pressable, View } from "react-native-web";
import { useSelector } from "react-redux";

const ProductItem = (props) => {
  //const products = useSelector((state) => state.products.availableProducts);
  return (
    <View style={styles.product}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <View style={styles.details}>
        <Text>{props.title}</Text>
        <Text>${props.price.toFixed(2)}</Text>
      </View>

      <View style={styles.actions}>
        <Pressable onPress={props.onViewDetail}>
          <Text>View Details</Text>
        </Pressable>
        <Pressable onPress={props.onAddToCart}>
          <Text>To Cart</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    backgroundColor: "white",
    elevation: 5,
    height: 300,
    margin: 20,
  },
  image: {
    width: "100%",
    height: "60%",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    padding: 10,
  },
  details: {
    alignItems: "center",
    padding: 10,
    height: "15%",
  },
});
export default ProductItem;
