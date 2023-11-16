import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chanId: '',
  channel: '',
  books: {},
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    subscribe(state, action) {
    },
    unsubscribe(state, action) {
    },
    setChanId(state, action) {
      state.chanId = action.payload;
    },
    setChannel(state, action) {
      state.channel = action.payload;
    },
    setBooks(state, action) {
      console.log('books in slice: ', action.payload);
      state.books = { ...action.payload };
    }
  }
});

export const reducer = bookSlice.reducer;
export const actions = bookSlice.actions;