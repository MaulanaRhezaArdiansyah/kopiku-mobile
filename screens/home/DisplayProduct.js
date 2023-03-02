import { FlatList, Image, Pressable, Text, View } from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductNotFound from "./ProductNotFound";
export default function DisplayProduct({ keyword, category }) {
  const navigation = useNavigation();
  const [dataProducts, setDataProducts] = useState([
    {
      id: "",
      title: "",
      price: "",
      image: "",
      category: "",
      description: "",
      images: [
        {
          product_id: "",
          name: "",
          filename: "",
        },
      ],
    },
  ]);
  const [notFound, setNotFound] = useState({
    error: false,
    message: "",
  });
  useEffect(() => {
    axios
      .get(
        `http://192.168.1.11:3001/api/v1/products?limit=6${
          keyword ? `&search=${keyword}` : ""
        }${category ? `&cat=${category}` : ""}`
      )
      .then((result) => {
        setDataProducts(result.data.data);
        setNotFound({
          error: false,
          message: "",
        });
      })
      .catch((err) => {
        setNotFound({
          error: true,
          message: err.response.data.message,
        });
      });
  }, [keyword, category]);
  if (notFound.error) {
    return <ProductNotFound />;
  }
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
                  uri: p.item.images[0].filename
                    ? `http://192.168.1.11:3001/uploads/images/${p.item.images[0].filename}`
                    : "https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg",
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
    </>
  );
}
