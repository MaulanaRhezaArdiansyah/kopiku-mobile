import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    // paddingTop: 80,
    paddingTop: 60,
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
  },
  navbarImage: {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  delivery: {
    fontSize: 34,
    fontWeight: "900",
    marginBottom: 30,
  },
  addressEdit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  address: {
    fontSize: 18,
    fontWeight: "700",
  },
  change: {
    fontSize: 15,
  },
  addressBox: {
    backgroundColor: "#fff",
    width: "100%",
    height: 180,
    borderRadius: 30,
    elevation: 10,
    padding: 25,
    display: "flex",
    justifyContent: "center",
    marginBottom: 30,
  },
  addressDetailBox: {
    borderBottomColor: "#bababa",
    borderBottomWidth: 0.3,
    paddingTop: 7,
    paddingBottom: 7,
  },
  deliveryBoxTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  deliveryMethodBox: {
    backgroundColor: "#fff",
    width: "100%",
    height: 220,
    borderRadius: 30,
    elevation: 10,
    padding: 25,
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
  },
  total: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  // DELIVERY RADIO BUTTON
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 45,
    borderBottomColor: "#bababa",
    borderBottomWidth: 1,
    width: "100%",
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: "#6A4029",
  },
  radioButtonText: {
    fontSize: 18,
    marginLeft: 16,
    paddingTop: 15,
    paddingBottom: 15,
  },
});
export default styles;
