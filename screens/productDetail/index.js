import { Image, Pressable, Text, View } from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";
import styles from "./style";

export default function ProductDetail({ navigation }) {
  const productDetail = [
    {
      id: 1,
      productTitle: "Cold Brew",
      productPrice: "30000",
      deliveryInfo: {
        startDay: "Monday",
        endDay: "Friday",
        startTime: "1 pm",
        endTime: "7 pm",
      },
      description:
        "Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.",
    },
  ];
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable
          style={styles.navbarImage}
          onPress={() => navigation.goBack()}
        >
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Pressable style={styles.navbarImage}>
          <Image
            source={require("../../src/assets/images/shopping-cart-2.png")}
          />
        </Pressable>
      </View>
      <View style={styles.imageBox}>
        <Image
          style={styles.productImage}
          source={require("../../src/assets/images/cold-brew.png")}
        />
      </View>
      <View style={styles.productTitle}>
        <Text style={styles.productTitleText}>
          {productDetail[0].productTitle}
        </Text>
        <Text style={styles.productPriceText}>
          IDR {productDetail[0].productPrice}
        </Text>
      </View>
      <View>
        <Text style={styles.deliveryInfoText}>Delivery info</Text>
        <Text style={styles.deliveryInfoSubtext}>
          Delivered only on {productDetail[0].deliveryInfo.startDay} until{" "}
          {productDetail[0].deliveryInfo.endDay} from{" "}
          {productDetail[0].deliveryInfo.startTime} to{" "}
          {productDetail[0].deliveryInfo.endTime}
        </Text>
      </View>
      <View>
        <Text style={styles.descriptionText}>Description</Text>
        <Text style={styles.descriptionSubtext}>
          {productDetail[0].description}
        </Text>
      </View>
      <Pressable
        style={[commonStyle.brownButton]}
        onPress={() => navigation.navigate("Cart Page")}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
          Add to cart
        </Text>
      </Pressable>
    </View>
  );
}
