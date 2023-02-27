import { Image, Pressable, ScrollView, Text, View } from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";

import styles from "./style";
export default function Profile({ navigation }) {
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>My Profile</Text>
        <Text>{""}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profilePicWrapper}>
          <Image
            source={require("../../src/assets/images/rheza-profile-pic-2.png")}
            style={styles.profilePic}
          />
        </View>
        <Text
          style={[
            commonStyle.textBrown,
            {
              fontSize: 20,
              fontWeight: "700",
              textAlign: "center",
              marginTop: 10,
              marginBottom: 10,
            },
          ]}
        >
          Maulana Rheza
        </Text>
        <Text
          style={[commonStyle.textBrown, { fontSize: 15, textAlign: "center" }]}
        >
          rhezaardiansyah222@gmail.com
        </Text>
        <Text
          style={[commonStyle.textBrown, { fontSize: 15, textAlign: "center" }]}
        >
          08123456789
        </Text>
        <Text
          style={[
            commonStyle.textBrown,
            { fontSize: 15, textAlign: "center", marginBottom: 20 },
          ]}
        >
          Jl. Jayagiri V No. 10X, Denpasar, Bali
        </Text>
        {/* <Pressable onPress={() => navigation.navigate("Edit Profile Page")}>
        <Text
          style={{
            color: "#6A4029",
            fontSize: 20,
            fontWeight: "700",
            textAlign: "center",
            marginTop: 5,
          }}
        >
          Edit
        </Text>
      </Pressable> */}

        <View style={[styles.orderHistoryBox]}>
          <View style={styles.orderHistoryText}>
            <Text
              style={[
                commonStyle.textBrown,
                { fontSize: 18, fontWeight: "700" },
              ]}
            >
              Order History
            </Text>
            <Pressable onPress={() => navigation.navigate("History Page")}>
              <Text style={[commonStyle.textBrown, { fontSize: 15 }]}>
                See more
              </Text>
            </Pressable>
          </View>
          <ScrollView horizontal>
            {[1, 2, 3, 4].map((item, index) => (
              <Image
                key={index + 1}
                source={require("../../src/assets/images/cold-brew.png")}
                style={styles.historyImage}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.buttonProfileBox}>
          <Pressable
            style={styles.buttonProfileCard}
            onPress={() => navigation.navigate("Edit Profile Page")}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#6A4029" }}>
              Edit Profile
            </Text>
            <Image
              source={require("../../src/assets/images/arrow-right.png")}
            />
          </Pressable>
          <Pressable style={styles.buttonProfileCard}>
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#6A4029" }}>
              FAQ
            </Text>
            <Image
              source={require("../../src/assets/images/arrow-right.png")}
            />
          </Pressable>
          <Pressable style={styles.buttonProfileCard}>
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#6A4029" }}>
              Help
            </Text>
            <Image
              source={require("../../src/assets/images/arrow-right.png")}
            />
          </Pressable>
        </View>

        <Pressable
          style={[commonStyle.brownButton, { width: "100%" }]}
          // onPress={() => navigation.navigate("Home Page")}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
            Save
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
