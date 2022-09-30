import { configureStore } from '@reduxjs/toolkit';
import sliceTyping from './slice'

export const store = configureStore({
  reducer: {
    myTyping: sliceTyping
  }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
