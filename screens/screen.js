import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import OnBoardScreen from "../components/OnBoardScreen";
import Login from "../components/Login";

const ScreenStack = createStackNavigator(
  {
    OnBoardScreen: OnBoardScreen,
    Login: Login,
  },
  {
    initialRouteName: "OnBoardScreen",
  }
);

const ScreenContainer = createAppContainer(ScreenStack);
export default ScreenContainer;
