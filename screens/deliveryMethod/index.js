import { useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";

import styles from "./style";
export default function DeliveryMethod({ navigation }) {
  const [deliveryOption, setDeliveryOption] = useState([
    { id: 1, value: "Door delivery", name: "Door delivery", selected: false },
    {
      id: 2,
      value: "Pick up at store",
      name: "Pick up at store",
      selected: false,
    },
    { id: 3, value: "Dine in", name: "Dine in", selected: false },
  ]);

  const onRadioBtnClick = (item) => {
    let updatedState = deliveryOption.map((deliveryItem) =>
      deliveryItem.id === item.id
        ? { ...deliveryItem, selected: true }
        : { ...deliveryItem, selected: false }
    );
    setDeliveryOption(updatedState);
  };
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>Checkout</Text>
        <Text>{""}</Text>
      </View>

      <View>
        <Text style={styles.delivery}>Delivery</Text>
      </View>

      <View style={styles.addressEdit}>
        <Text style={styles.address}>Address details</Text>
        <Pressable>
          <Text style={[commonStyle.textBrown, styles.change]}>change</Text>
        </Pressable>
      </View>

      <View style={styles.addressBox}>
        <View style={styles.addressDetailBox}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            Iskandar Street
          </Text>
        </View>
        <View style={styles.addressDetailBox}>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            Km 5 refinery road oppsite re public road, effurun, Jakarta
          </Text>
        </View>
        <View
          style={[
            styles.addressDetailBox,
            { borderBottomColor: "#fff", borderBottomWidth: 0 },
          ]}
        >
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            +62 81348287878
          </Text>
        </View>
      </View>

      <Text style={styles.deliveryBoxTitle}>Delivery methods</Text>

      <View style={styles.deliveryMethodBox}>
        {deliveryOption.map((item) => (
          <View style={styles.radioButtonContainer} key={item.id}>
            <TouchableOpacity
              style={styles.radioButton}
              onPress={() => onRadioBtnClick(item)}
            >
              {item.selected ? <View style={styles.radioButtonIcon} /> : null}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onRadioBtnClick(item);
              }}
            >
              <Text style={styles.radioButtonText}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.total}>
        <Text style={{ fontSize: 18 }}>Total</Text>
        <Text style={{ fontSize: 24, fontWeight: "900" }}>IDR 123.000</Text>
      </View>

      <Pressable
        style={[commonStyle.brownButton]}
        onPress={() => navigation.navigate("Payment Page")}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
          Proceed to payment
        </Text>
      </Pressable>
    </View>
  );
}
