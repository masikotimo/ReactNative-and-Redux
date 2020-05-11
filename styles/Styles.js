import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const buttons = StyleSheet.create({
  whitebuttons: {
    alignItems: "center",
    backgroundColor: "#fff",
    height: wp("11"),
    width: wp("70"),
    borderRadius: 5,
    marginLeft: wp("15"),
    marginTop: wp("3"),
  },
  whitebtnOveride: {
    height: wp("14"),
  },
  whitebuttonsScoreCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    height: wp("11"),
    width: wp("70"),
    borderRadius: 5,
    marginLeft: wp("15"),
    marginTop: wp("8"),
  },

  whitebuttontext: {
    color: "#6A00A8",
    fontWeight: "400",
    fontSize: wp("5"),
    paddingTop: wp("2.6%"),
    alignItems: "center",
  },
  whitebuttontextOveride: {
    paddingTop: wp("4%"),
  },
});

export { buttons };
