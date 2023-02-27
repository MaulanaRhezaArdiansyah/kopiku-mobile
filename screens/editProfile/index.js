import { Image, Pressable, Text, TextInput, View } from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";

import styles from "./style";
export default function EditProfile({ navigation }) {
  const detailProfile = [
    {
      id: 10,
      name: "Maulana Rheza",
      email: "rhezaardiansyah222@gmail.com",
      phone: "08123456789",
      birthDate: "12/3/2000",
      deliveryAddress: "Jl. Jayagiri V No. 10X, Denpasar, Bali",
    },
  ];
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>Edit Profile</Text>
        <Text>{""}</Text>
      </View>

      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require("../../src/assets/images/rheza-profile-pic-2.png")}
        />
        <Pressable style={styles.editPencilWrapper}>
          <Image
            style={styles.editPencil}
            source={require("../../src/assets/images/edit-pencil.png")}
          />
        </Pressable>
      </View>

      <View>
        <Text style={styles.labelForm}>Name :</Text>
        <TextInput
          placeholder={detailProfile[0].name}
          style={styles.inputForm}
        />
      </View>
      <View>
        <Text style={styles.labelForm}>Email Address :</Text>
        <TextInput
          placeholder={detailProfile[0].email}
          style={styles.inputForm}
        />
      </View>
      <View>
        <Text style={styles.labelForm}>Phone Number :</Text>
        <TextInput
          placeholder={detailProfile[0].phone}
          style={styles.inputForm}
        />
      </View>
      <View>
        <Text style={styles.labelForm}>Date of Birth :</Text>
        <View style={styles.inputBirthDate}>
          <TextInput
            placeholder={detailProfile[0].birthDate}
            // style={}
          />
          <Pressable>
            <Image source={require("../../src/assets/images/calendar.png")} />
          </Pressable>
        </View>
      </View>
      <View style={{ marginBottom: 40 }}>
        <Text style={styles.labelForm}>Delivery Address :</Text>
        <TextInput
          placeholder={detailProfile[0].deliveryAddress}
          style={styles.inputForm}
        />
      </View>

      <Pressable
        style={[commonStyle.brownButton]}
        onPress={() => navigation.navigate("Profile Page")}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
          Save and Update
        </Text>
      </Pressable>
    </View>
  );
}
