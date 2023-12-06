import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { FlatList, Image, Pressable, ScrollView, View } from "react-native-web";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import * as cartActions from "../../store/actions/cart";
const ProductDetailScreen = (props) => {
  // const productId = props.navigation.getParam("productId");
  const route = useRoute();
  const productId = route.params.productId;
  const productTitle = route.params.productTitle;
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId),
  );
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <View>
        <Image style={styles.image} />
        <Pressable
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        >
          <Text>Add To Cart</Text>
        </Pressable>
        <Text>{selectedProduct.title}</Text>
        <Text>$ {selectedProduct.price.toFixed(2)}</Text>
        <Text>{selectedProduct.description}</Text>
      </View>
    </ScrollView>
  );
};
ProductDetailScreen.navigationOptions = {
  headerTitle: "productTitle", //bug about the navigation headerTitle
};
// ProductDetailScreen.navigationOptions = (navData) => {
//   return { headerTitle: navData.route.params.productTitle };
// };
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
export default ProductDetailScreen;
