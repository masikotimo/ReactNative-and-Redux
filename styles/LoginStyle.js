import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    width: wp("100%"),
  },
  loginContainer: {
    marginTop: wp("50"),
  },
  user: {
    width: wp("10"),
    height: wp("10"),
    marginLeft: wp("80"),
    marginTop: wp("-10"),
  },
  passwordimage: {
    width: wp("10"),
    height: wp("10"),
    marginLeft: wp("80"),
    marginTop: wp("-10"),
  },
  textone: {
    color: "#fff",
    fontSize: wp("5"),
    fontFamily: "subheading",
    fontWeight: "100",
    marginLeft: wp("25"),
    marginTop: wp("4"),
  },

  input: {
    borderRadius: 5,
    borderWidth: 1,
    height: wp("15"),
    width: wp("75"),
    marginLeft: wp("15"),
    marginTop: 20,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    color: "black",
    fontSize: wp("6"),
    borderColor: "white",
  },

  endpage: {
    color: "#fff",
    marginLeft: wp("25"),
    fontFamily: "Helvetica",
    fontSize: wp("5"),
    marginTop: wp("5"),
  },
  signupbutton: {
    color: "#00FF00",
  },
  errormessage: {
    color: "red",
    marginLeft: wp("20"),
    marginTop: wp("0"),
    fontSize: 20,
    fontFamily: "Helvetica",
  },
});
export { styles };
