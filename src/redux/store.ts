import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authReducer } from "./Auth/slice";
import { operationsReducer } from "./Operations/slice";
import { walletsReducer } from "./Wallets/slice";
import { categoriesReducer } from "./Categories/slice";

const authPersistConfig = {
  key: "author",
  storage: AsyncStorage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  operations: operationsReducer,
  wallets: walletsReducer,
  categories: categoriesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
