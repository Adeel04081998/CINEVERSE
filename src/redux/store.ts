import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import persistStore from 'redux-persist/es/persistStore'
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';

const rootReducer = combineReducers({
    user: userSlice,
})
const persistConfig = {
    key: 'nestable', // Change this to a unique key for your application
    storage: AsyncStorage,
 };
export type RootState = ReturnType<typeof rootReducer>
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
})
export const persistor = persistStore(store);


export default store
