import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";
import styles from "./style";
export default function Cart({ navigation }) {
  const carts = [
    {
      id: 1,
      productName: "Cold Brew",
      productPrice: "34000",
      total: 0,
    },
    {
      id: 2,
      productName: "Cappucino",
      productPrice: "12000",
      total: 0,
    },
    {
      id: 3,
      productName: "Mbahman Coffee",
      productPrice: "20000",
      total: 0,
    },
    {
      id: 4,
      productName: "Mbahman Coffee",
      productPrice: "20000",
      total: 0,
    },
  ];
  const [total, setTotal] = useState(0);
  // const isLogged = false;
  const isLogged = true;
  if (!isLogged) {
    navigation.navigate("Login Page");
  }
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>Cart</Text>
        <Text>{""}</Text>
      </View>
      <View style={styles.swipe}>
        <Image
          style={styles.fingerSwipe}
          source={require("../../src/assets/images/finger-swipe.png")}
        />
        <Text style={{ fontSize: 15 }}>swipe left on item to delete</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={carts}
        renderItem={(c) => {
          return (
            <View style={styles.cartCard}>
              <Image
                style={styles.productImage}
                source={require("../../src/assets/images/cold-brew.png")}
              />
              <View style={styles.productInfoCart}>
                <Text style={styles.productTitle}>{c.item.productName}</Text>
                <Text style={[commonStyle.textBrown, styles.productPrice]}>
                  IDR {c.item.productPrice}
                </Text>
              </View>
              <View style={styles.totalProduct}>
                <Pressable onPress={() => setTotal(total - 1)}>
                  <Text style={styles.decrement}>-</Text>
                </Pressable>
                {/* <Text style={styles.total}>{c.item.total}</Text> */}
                <Text style={styles.total}>{total}</Text>
                <Pressable
                  onPress={(tes) => {
                    tes.target ? setTotal(total + 1) : setTotal((total = 0));
                  }}
                >
                  <Text style={styles.increment}>+</Text>
                </Pressable>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={[commonStyle.brownButton, { marginBottom: 30 }]}
        onPress={() => navigation.navigate("Delivery Method Page")}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
          Confirm and Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
