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
  paymentMethodTitle: {
    borderBottomWidth: 2.5,
    borderBottomColor: "#9F9F9F",
    paddingBottom: 10,
  },
  paymentMethodTitleText: {
    fontSize: 25,
    fontWeight: "700",
  },
  paymentOptionSlider: {
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    height: 280,
    borderBottomWidth: 2.5,
    borderBottomColor: "#9F9F9F",
    marginBottom: 10,
  },
  position: {
    justifyContent: "center",
    alignItems: "center",
  },
  orderItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  orderInfo: {
    paddingBottom: 20,
  },
  totalPayment: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  totalPaymentBox: {
    marginTop: 10,
    borderTopColor: "#9F9F9F",
    borderTopWidth: 2.5,
  },
});
export default styles;
