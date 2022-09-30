import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Typing {
  value: string;
};

const INITIAL_STATE: string = '...';

const sliceTyping =  createSlice({
  name: 'typing',
  initialState: INITIAL_STATE,
  reducers: {
    changeMyTyping(_state, { payload }: PayloadAction<string>) {

      return payload;
    }
  }
})

export default sliceTyping.reducer;

export const { changeMyTyping } = sliceTyping.actions;

export const useTyping = (state: any) => {
  return state.myTyping as string;
}
