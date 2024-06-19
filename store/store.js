import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { pokemonApi } from '../services/pokemon'
import catchReducer from "./slices/catchSlice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage"

const persistConfig = {
  storage: AsyncStorage,
  key: "root",
  whitelist: ["catch"],
}

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  catch: catchReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(
      {
        serializableCheck: {
          ignoredActions: [ FLUSH ,REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }).concat(pokemonApi.middleware),
})

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(
      {
        serializableCheck: {
          ignoredActions: [ FLUSH ,REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }).concat(pokemonApi.middleware),
  })
}

export const persistor = persistStore(store)
