import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "../reducers/themeReduce";

const store = configureStore({
    reducer: rootReducer,
});

export default store;
