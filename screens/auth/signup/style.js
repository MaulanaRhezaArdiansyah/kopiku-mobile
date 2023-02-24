import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "space-between",
    justifyContent: "center",
    paddingVertical: 20,
  },
  textWelcome: {
    color: "#000",
    fontWeight: "700",
    fontSize: 60,
    textAlign: "center",
  },
  subTextWelcome: {
    color: "#000",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
  },
  createAccountButton: {
    backgroundColor: "#6A4029",
    width: 350,
    height: 70,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 50,
  },
  inputForm: {
    borderBottomColor: "#9F9F9F",
    borderBottomWidth: 1,
    width: 350,
    height: 50,
    textAlign: "left",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#9A9A9D",
    fontSize: 18,
    marginBottom: 15,
  },
  image: {
    marginBottom: 20,
  },
});

export default styles;
