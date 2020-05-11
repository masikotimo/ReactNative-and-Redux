import React from "react";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import AsyncStorage from "@react-native-community/async-storage";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const initialState = {
  isInstalled: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_INSTALLED":
      return {
        ...state,
        activePlayer: action.player,
        isInstalled: true,
      };
  }
  return state;
};

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: [],
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
