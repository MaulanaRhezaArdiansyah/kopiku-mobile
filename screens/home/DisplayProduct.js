import { FlatList, Image, Pressable, Text, View } from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import axios from "axios";
export default function DisplayProduct({ keyword, category }) {
  const navigation = useNavigation();
  const [dataProducts, setDataProducts] = useState([]);
  // console.log(keyword);
  useEffect(() => {
    axios
      .get(
        `http://192.168.1.11:3001/api/v1/products?limit=6${
          keyword ? `&search=${keyword}` : ""
        }${category ? `&cat=${category}` : ""}`
      )
      .then((result) => {
        setDataProducts(result.data.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, [keyword, category]);
  // console.log(dataProducts);
  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataProducts}
        renderItem={(p) => {
          return (
            <Pressable
              android_ripple={{
                color: "#f2f2f2",
                foreground: true,
                radius: 100,
                borderless: true,
              }}
              style={styles.cardWrapper}
              onPress={() => {
                navigation.navigate("Product Detail Page", {
                  productId: p.item.id,
                });
              }}
            >
              <Image
                source={{
                  uri: `http://192.168.1.11:3001/uploads/images/${p.item.images[0].filename}`,
                }}
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
