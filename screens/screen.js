import * as React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { SignUpScreen } from "./SignUpScreen";
import { LoginScreen } from "./LoginScreen";
import { OtyoHomeScreen } from "./OtyoHomeScreen";
import { GameModeScreen } from "./GameModeScreen";
import { SelectWordCategoryScreen } from "./SelectWordCategoryScreen";
import { SelectLanguageScreen } from "./SelectLanguageScreen";
import { SubmitNewWordScreen } from "./SubmitNewWordScreen";
import { SelectGameLevelScreen } from "./SelectGameLevelScreen";
import { AddTeamScreen } from "./AddTeamScreen";
import { AddTeamMemberScreen } from "./AddTeamMemberScreen";
import { CountdownTimerScreen } from "./CountdownTimerScreen";
import { ScoreEntryScreen } from "./ScoreEntryScreen";
import { ScoreCardScreen } from "./ScoreCardScreen";
import { ViewScoreScreen } from "./ViewScoreScreen";
import { ThreeSecondCountdownTimerScreen } from "./ThreeSecondCountdownTimerScreen";
import { PayForSubscription } from "../components/PayForSubscription";
import { DisplayCardScreen } from "./DisplayCardScreen";
import { CheckingWordScreen } from "./CheckingWordScreen";

const ScreenStack = createStackNavigator(
  {
    SignUpScreen: SignUpScreen,
    LoginScreen: LoginScreen,
    OtyoHomeScreen: OtyoHomeScreen,
    GameModeScreen: GameModeScreen,
    SelectWordCategoryScreen: SelectWordCategoryScreen,
    SelectLanguageScreen: SelectLanguageScreen,
    SubmitNewWordScreen: SubmitNewWordScreen,
    SelectGameLevelScreen: SelectGameLevelScreen,
    PayForSubscription: PayForSubscription,
    AddTeamScreen: AddTeamScreen,
    AddTeamMemberScreen: AddTeamMemberScreen,
    ThreeSecondCountdownTimerScreen: ThreeSecondCountdownTimerScreen,
    DisplayCardScreen: DisplayCardScreen,
    CountdownTimerScreen: CountdownTimerScreen,
    ScoreEntryScreen: ScoreEntryScreen,
    ScoreCardScreen: ScoreCardScreen,
    ViewScoreScreen: ViewScoreScreen,
    CheckingWordScreen: CheckingWordScreen,
  },
  {
    initialRouteName: "LoginScreen",
  }
);

const ScreenContainer = createAppContainer(ScreenStack);
export default ScreenContainer;
