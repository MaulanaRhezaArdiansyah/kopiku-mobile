import { Image, Pressable, ScrollView, Text, View } from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";

import styles from "./style";
export default function Payment({ navigation }) {
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
        {[1, 2, 3].map((i) => (
          <Image
            style={{ marginRight: 10 }}
            source={require("../../src/assets/images/card.png")}
          />
        ))}
      </ScrollView>

      <ScrollView style={styles.orderInfo} showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4, 5].map((ord, index) => (
          <View style={styles.orderItem}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              {index + 1} Hazelnut Latte
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>IDR 20000</Text>
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
