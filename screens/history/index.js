import { FlatList, Image, Pressable, Text, View } from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";
import styles from "./style";
export default function History({ navigation }) {
  const history = [
    {
      id: 1,
      // productImage: ,
      productTitle: "Mbahman Coffee",
      productPrice: "12000",
      deliveryMethod: "Door delivery",
      //   status: "Waiting for delivery",
      detailStatus: "3 PM",
    },
    {
      id: 2,
      // productImage: ,
      productTitle: "Cappucino",
      productPrice: "20000",
      deliveryMethod: "Pick up at store",
      // status: "Dine in",
      detailStatus: "April 27th 2023, 8 AM",
    },
    {
      id: 3,
      // productImage: ,
      productTitle: "Hazelnut Latte",
      productPrice: "15000",
      deliveryMethod: "Dine in",
      // status: "Dine in",
      detailStatus: "Monday at 3 PM",
    },
    {
      id: 4,
      // productImage: ,
      productTitle: "Hazelnut Latte",
      productPrice: "15000",
      deliveryMethod: "Dine in",
      // status: "Dine in",
      detailStatus: "Monday at 3 PM",
    },
  ];
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>History</Text>
        <Text>{""}</Text>
      </View>

      <View>
        <Text style={styles.orderHistoryTitle}>Order History</Text>
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
        data={history}
        renderItem={(h) => {
          return (
            <View style={styles.historyCard}>
              <Image
                style={styles.productImage}
                source={require("../../src/assets/images/cold-brew.png")}
              />
              <View style={styles.productInfoCart}>
                <Text style={styles.productTitle}>{h.item.productTitle}</Text>
                <Text style={[commonStyle.textBrown, styles.productPrice]}>
                  IDR {h.item.productPrice}
                </Text>
                <View style={{ flexDirection: "row", width: 200 }}>
                  <Text
                    style={[
                      styles.productStatus,
                      { flexWrap: "wrap", flex: 1 },
                    ]}
                  >
                    {h.item.deliveryMethod === "Door delivery"
                      ? `Waiting for delivery [ will arrive at ${h.item.detailStatus} ]`
                      : h.item.deliveryMethod === "Pick up at store"
                      ? `Picked up at store [ ${h.item.detailStatus} ]`
                      : h.item.deliveryMethod === "Dine in"
                      ? `Dine in on ${h.item.detailStatus}`
                      : ""}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />

      {/* <Text style={styles.historyLeftText}>You have no history left</Text> */}
    </View>
  );
}
