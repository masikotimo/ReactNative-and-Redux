import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("window");

export default class OnBoardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Swiper>
          <View style={styles.slide}>
            <Image
              source={require("../assets/images/OtyoBackground.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/images/OtyoBackground.jpg")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/images/OtyoBackground.jpg")}
              style={styles.image}
            />
          </View>
        </Swiper>
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
});
