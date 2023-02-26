import { Image, Pressable, ScrollView, Text, View } from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";

import styles from "./style";
export default function Payment({ navigation }) {
  const paymentMethod = [
    {
      id: 1,
      payment: "Bank BRI Platinum",
      method: "Credit / Debit Card",
      image: require("../../src/assets/images/card.png"),
    },
    {
      id: 2,
      payment: "Bank BNI",
      method: "Virtual Account",
      image: null,
    },
    {
      id: 3,
      payment: "Cash",
      method: "Cash on Delivery",
      image: null,
    },
  ];
  // ini nanti diambil dari localStorage
  const orderInfo = [
    {
      id: 1,
      productTitle: "Hazelnut Latte",
      productPrice: 20000,
      orderTotal: 3,
    },
    {
      id: 2,
      productTitle: "Mbahman Coffee",
      productPrice: 10000,
      orderTotal: 1,
    },
    {
      id: 3,
      productTitle: "Cappucino",
      productPrice: 22000,
      orderTotal: 2,
    },
    {
      id: 4,
      productTitle: "Kapal Api",
      productPrice: 7000,
      orderTotal: 1,
    },
  ];
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>Payment</Text>
        <Text>{""}</Text>
      </View>

      <View style={styles.paymentMethodTitle}>
        <Text style={styles.paymentMethodTitleText}>Payment Methods</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.paymentOptionSlider}
        contentContainerStyle={styles.position}
      >
        {paymentMethod.map((i) =>
          i.image ? (
            <Image
              style={{ marginRight: 10 }}
              source={i.image ? i.image : ""}
            />
          ) : (
            <View style={styles.paymentMethodOther}>
              <Text style={{ fontSize: 18 }}>{i.method}</Text>
              <Text style={{ fontSize: 18 }}>{i.payment}</Text>
            </View>
          )
        )}
      </ScrollView>

      <ScrollView style={styles.orderInfo} showsVerticalScrollIndicator={false}>
        {orderInfo.map((ord, index) => (
          <View key={ord.id} style={styles.orderItem}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              {ord.orderTotal} {ord.productTitle}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              IDR {ord.productPrice}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.totalPaymentBox}>
        <View style={[styles.totalPayment, { paddingTop: 20 }]}>
          <Text style={{ fontSize: 18 }}>Subtotal</Text>
          <Text style={{ fontSize: 18 }}>IDR 20000</Text>
        </View>
        <View style={[styles.totalPayment, { marginBottom: 10 }]}>
          <Text style={{ fontSize: 18 }}>Tax</Text>
          <Text style={{ fontSize: 18 }}>IDR 20000</Text>
        </View>
        <View style={styles.totalPayment}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>TOTAL</Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>IDR 20000</Text>
        </View>
      </View>

      <Pressable
        style={[commonStyle.brownButton]}
        onPress={() => navigation.navigate("Home Page")}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
          Pay Now
        </Text>
      </Pressable>
    </View>
  );
}
