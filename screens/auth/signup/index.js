import { useState } from "react";
import { View, Text, Image, TextInput, Pressable } from "react-native";
import styling from "./style";
const styles = styling;
export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require("../../../src/assets/images/signup-img.png")} />
        <Text style={styles.textSignup}>Sign{"\n"}Up</Text>
      </View>
      <View>
        <TextInput
          style={styles.inputForm}
          placeholder="Enter your email"
          onChangeText={setEmail}
        />
        <TextInput style={styles.inputForm} placeholder="Enter your password" />
        <TextInput
          style={styles.inputForm}
          placeholder="Enter your phone number"
        />
      </View>
      <Pressable onPress={() => navigation.navigate("Login Page")}>
        <View style={styles.createAccountButton}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
            Create Account
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
