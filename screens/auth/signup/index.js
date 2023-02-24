import { View, Text, Image, TextInput, Pressable } from "react-native";
import styling from "./style";
const styles = styling;
export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require("../../../src/assets/images/signup-img.png")} />
      </View>
      <View>
        <TextInput style={styles.inputForm}>Enter your email address</TextInput>
        <TextInput style={styles.inputForm}>Enter your password</TextInput>
        <TextInput style={styles.inputForm}>Enter your phone number</TextInput>
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
