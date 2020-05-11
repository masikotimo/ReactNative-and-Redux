import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");

class OnBoardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.setVariable();
  }
  static navigationOptions = {
    headerShown: false,
  };
  UNSAFE_componentWillMount() {
    this.props.isInstalled === true
      ? this.props.navigation.navigate("Login")
      : null;
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Swiper autoplay={true}>
          <View style={styles.slide}>
            <Image
              source={require("../assets/images/forest.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/images/horse.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/images/tree.jpg")}
              style={styles.image}
            />
          </View>
        </Swiper>
        <View style={styles.buttonContainer}>
          <View style={styles.signupContainer}>
            <Text style={styles.signup}>Sign Up</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          >
            <View style={styles.loginContainer}>
              <Text style={styles.login}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: 70,
    width: 370,
    height: 60,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  signupContainer: {
    width: 180,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -10,
  },
  signup: {
    fontFamily: "Helvetica",
    fontSize: 20,
    color: "#3B55E6",
    fontWeight: "bold",
  },
  loginContainer: {
    width: 180,
    height: 60,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    marginLeft: -10,
  },
  login: {
    fontFamily: "Helvetica",
    fontSize: 20,
    color: "#3B55E6",
    fontWeight: "bold",
  },
});

function mapStateToProps(state) {
  return {
    isInstalled: state.isInstalled,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setVariable: () =>
      dispatch({
        type: "IS_INSTALLED",
        isInstalled: false,
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OnBoardScreen);
