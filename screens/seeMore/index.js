import { FlatList, Image, Pressable, Text, View } from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";
import styles from "./style";
export default function SeeMore({ navigation }) {
  const category = "Coffee";
  const coffee = [
    { id: 1, productTitle: "Hazelnut Latte", productPrice: "20000" },
    { id: 2, productTitle: "Creamy Ice Latte", productPrice: "16000" },
    { id: 3, productTitle: "Cappucino", productPrice: "15000" },
    { id: 4, productTitle: "Mbahman Coffee", productPrice: "12000" },
    { id: 5, productTitle: "Mbahman Coffee", productPrice: "12000" },
    { id: 6, productTitle: "Mbahman Coffee", productPrice: "12000" },
  ];
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>{category}</Text>
        <Text>{""}</Text>
      </View>
      <FlatList
        style={styles.listProduct}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.cardRowContainer}
        data={coffee}
        renderItem={(i) => {
          return (
            <View key={i.item.id} style={styles.cardWrapper}>
              <Image
                style={styles.productImage}
                source={require("../../src/assets/images/cold-brew.png")}
              />
              <View style={[styles.card, styles.shadowCard]}>
                <View style={styles.text}>
                  <Text style={styles.productTitle}>{i.item.productTitle}</Text>
                  <Text style={styles.productPrice}>
                    IDR {i.item.productPrice}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
