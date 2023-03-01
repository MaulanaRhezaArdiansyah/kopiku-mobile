import { FlatList, Image, Pressable, Text, View } from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import axios from "axios";
export default function DisplayProduct({ keyword, category }) {
  const products = [
    { id: 1, productTitle: "Hazelnut Latte", productPrice: "20000" },
    { id: 2, productTitle: "Creamy Ice Latte", productPrice: "16000" },
    { id: 3, productTitle: "Cappucino", productPrice: "15000" },
    { id: 4, productTitle: "Mbahman Coffee", productPrice: "12000" },
  ];
  const navigation = useNavigation();
  const [dataProducts, setDataProducts] = useState([]);
  console.log(keyword);
  useEffect(() => {
    axios
      .get(
        `http://192.168.1.11:3001/api/v1/products${
          keyword ? `?search=${keyword}` : ""
        }${category ? `?cat=${category}` : ""}`
      )
      .then((result) => {
        setDataProducts(result.data.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, [keyword, category]);
  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataProducts}
        renderItem={(p) => {
          return (
            <Pressable
              style={styles.cardWrapper}
              onPress={() => {
                navigation.navigate("Product Detail Page");
              }}
            >
              <Image
                source={{
                  uri: `http://192.168.1.11:3001/uploads/images/${p.item.images[0].filename}`,
                }}
                // source={require("../../src/assets/images/hazelnut-contoh.jpg")}
                style={styles.productImage}
              />
              <View style={styles.card}>
                <Text style={styles.productTitleText}>{p.item.title}</Text>
                <Text style={[commonStyle.textBrown, styles.productPriceText]}>
                  IDR. {p.item.price}
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((p) => {
          return (
            <Pressable
              style={styles.cardWrapper}
              onPress={() => {
                navigation.navigate("Product Detail Page");
              }}
            >
              <Image
                source={require("../../src/assets/images/hazelnut-contoh.jpg")}
                style={styles.productImage}
              />
              <View style={styles.card}>
                <Text style={styles.productTitleText}>{p.productTitle}</Text>
                <Text style={[commonStyle.textBrown, styles.productPriceText]}>
                  IDR. {p.productPrice}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView> */}
    </>
  );
}
