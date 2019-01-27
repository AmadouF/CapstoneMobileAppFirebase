import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../Themes";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    padding: 30
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: "contain"
  },
  centered: {
    alignItems: "center"
  },

  input: {
    height: 40,
    backgroundColor: "red"
  },

  buttonContainer: {
    backgroundColor: "#2980b9",
    paddingVertical: 15,
    paddingHorizontal: 50,
    width: "100%"
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "700"
  },

  textInput: {
    height: 40,
    width: "100%",
    paddingLeft: 6,

    marginTop: 8
  }
});
