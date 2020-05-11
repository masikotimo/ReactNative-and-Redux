import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Animated,
  Image,
  TouchableHighlight,
  StatusBar,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";
import { buttons } from "../styles/Styles";
import { styles } from "../styles/LoginStyle";

class Login extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    (this.state = {
      username: "",
      password: "",
      Users: [],
      Loading: false,
    }),
      (this.fadeAnimation = new Animated.Value(0));
  }

  componentDidMount() {
    Animated.timing(this.fadeAnimation, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <View>
        <KeyboardAwareScrollView
          style={{ backgroundColor: "rgb(63,12,91)" }}
          behavior="padding"
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={styles.container}
          scrollEnabled={false}
          enableOnAndroid={true}
        >
          <StatusBar hidden={true} />
          <ImageBackground
            source={require("../assets/images/texture.jpeg")}
            style={styles.container}
          >
            <View style={styles.loginContainer}></View>
            <TextInput
              placeholder="Username"
              placeholderTextColor="#fff"
              style={styles.input}
              onChangeText={(username) => this.setState({ username })}
            />
            <Image
              source={require("../assets/images/User.png")}
              style={styles.user}
            />
            <Text style={styles.errormessage}>{this.state.Error}</Text>

            <TextInput
              placeholder="Password"
              placeholderTextColor="#fff"
              style={styles.input}
              password={true}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
            />
            <Image
              source={require("../assets/images/Password.png")}
              style={styles.passwordimage}
            />
            <Text style={styles.errormessage}>{this.state.Era}</Text>

            <TouchableHighlight
              style={[buttons.whitebuttons, buttons.whitebtnOveride]}
            >
              <Text
                style={[
                  buttons.whitebuttontext,
                  buttons.whitebuttontextOveride,
                ]}
              >
                Log In
              </Text>
            </TouchableHighlight>

            <Text style={styles.endpage}>
              New user?
              <Text style={styles.signupbutton}>Sign Up</Text>
            </Text>
          </ImageBackground>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    teamArray: state.teamArray,
    teamName: state.teamName,
    memberArray: state.memberArray,
    counter: state.counter,
    Loggedin: state.Loggedin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setplayer: (activeperson, userid) =>
      dispatch({
        type: "SET_PLAYER",
        player: activeperson,
        login: true,
        Userid: userid,
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
