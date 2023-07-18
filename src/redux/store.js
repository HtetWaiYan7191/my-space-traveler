import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
