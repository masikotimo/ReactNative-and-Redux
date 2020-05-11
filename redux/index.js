import React from "react";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import AsyncStorage from "@react-native-community/async-storage";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
let total;

const initialState = {
  teamArray: [],
  teamName: "",
  memberArray: [],
  memberName: "",
  counter: 0,
  scoreInput: "",
  Rounds: 1,
  RoundsArray: [],
  Category: "",
  SubmittedWord: "timothy",
  activePlayer: "",
  Loggedin: false,
  Userid: 0,
  GameStarted: false,
  GameMode: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TEAM":
      if (state.teamName) {
        state.teamArray.push({
          name: state.teamName,
          Scores: 0,
          Member: [],
        });
        return { ...state, teamArray: state.teamArray, teamName: "" };
      }
      break;

    case "ADD_MEMBER":
      if (state.memberName) {
        state.memberArray.push(state.memberName);
        return { ...state, memberArray: state.memberArray, memberName: "" };
      }
      break;

    case "DELETE_TEAM":
      (function (key = action.key) {
        state.teamArray.splice(key, 1);
        return { ...state, teamArray: state.teamArray };
      })();
      break;

    case "DELETE_MEMBER":
      (function (key = action.key) {
        state.memberArray.splice(key, 1);
        return { ...state, memberArray: state.memberArray };
      })();
      break;

    case "CHANGE_TEXT":
      return Object.assign({}, state, { teamName: action.text });
      break;

    case "CHANGE_MEMBERTEXT":
      return Object.assign({}, state, { memberName: action.text });
      break;

    case "CHANGE_SCORE":
      return Object.assign({}, state, { scoreInput: action.text });
      break;

    case "PUT_SCORE(PLAYMODE)":
      return Object.assign({}, state, { scoreInput: action.text });
      break;

    case "SUBMIT":
      state.teamArray.map((i) =>
        i.name === action.tname ? (i.Member = state.memberArray) : null
      );
      return { ...state, memberArray: [], memberName: "" };
      break;

    case "SET_PLAY_MODE":
      return { ...state, GameMode: "PLAY-MODE" };

    case "SET_TIMER_MODE":
      return { ...state, GameMode: "TIMER-MODE" };

    case "START_GAME_ROUND":
      if (state.counter < state.teamArray.length) {
        state.counter++;
        return { ...state, counter: state.counter };
      } else {
        state.Rounds++;
        // alert("Round" + state.Rounds);
        return { ...state, counter: 0, Rounds: state.Rounds };
      }
      break;

    case "START_GAME":
      return { ...state, GameStarted: true };

    case "FLASHSCORE":
      return {
        ...state,
        Rounds: 1,
        counter: 0,
        teamArray: [],
        GameStarted: false,
      };
      break;
    case "LOGOUT":
      return { ...state, Loggedin: false, teamArray: [] };

    case "SET_PLAYER":
      return {
        ...state,
        activePlayer: action.player,
        Loggedin: action.login,
        Userid: action.Userid,
      };

    case "CHANGE_VALUE":
      return { ...state, Category: action.Category };

    case "CHANGE_SUBMITTEDWORD":
      return Object.assign({}, state, { SubmittedWord: action.text });
    case "SET_SCORE":
      console.log(action.currentTeam);
      state.RoundsArray.push({
        Rounds: state.Rounds,
        name: action.currentTeam,
        Scores: parseInt(state.scoreInput) * 1,
      });
      //Aggregating scores
      state.teamArray.map((x) => {
        total = 0;
        console.log(state.RoundsArray);
        state.RoundsArray.map((i) => {
          total += x.name === i.name ? i.Scores : 0;
        });
        console.log(x.name + " : " + total);

        state.teamArray.map((b) =>
          b.name === x.name ? (b.Scores = total) : null
        );
        console.log(state.teamArray);
        return {
          ...state,
          teamArray: state.teamArray,
          RoundsArray: state.RoundsArray,
        };
      });
  }
  return state;
};

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: [
    "counter",
    "Rounds",
    "GameStarted",
    "GameMode",
    "teamArray",
    "scoreInput",
  ],
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
