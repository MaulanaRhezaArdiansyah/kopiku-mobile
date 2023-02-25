import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 80,
  },
  //   NAVBAR STYLE
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  navbarRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 20,
  },
  //   TITLE STYLE
  title: {
    fontWeight: "700",
    color: "#000",
    fontSize: 36,
  },
  //   SEARCH STYLE
  searchBox: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 60,
    borderRadius: 30,
    backgroundColor: "#EFEEEE",
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: "center",
    marginTop: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    fontSize: 18,
    fontWeight: "900",
  },
});

export default styles;
