import { FlatList, Image, Pressable, Text, View } from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
import { useNavigation } from "@react-navigation/native";
export default function DisplayProduct() {
  const products = [
    { id: 1, productTitle: "Hazelnut Latte", productPrice: "20000" },
    { id: 2, productTitle: "Creamy Ice Latte", productPrice: "16000" },
    { id: 3, productTitle: "Cappucino", productPrice: "15000" },
    { id: 4, productTitle: "Mbahman Coffee", productPrice: "12000" },
  ];
  const navigation = useNavigation();
  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={(p) => {
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
                <Text style={styles.productTitleText}>
                  {p.item.productTitle}
                </Text>
                <Text style={[commonStyle.textBrown, styles.productPriceText]}>
                  IDR. {p.item.productPrice}
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
