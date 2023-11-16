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
      const [chanId, books] = action.payload;
      if (chanId === state.chanId && Array.isArray(books)) {
        const booksData = books.reverse().reduce((acc, el) => {
          const [price, count, amount] = el;
          acc[price] = {
            price,
            count,
            amount,
          };
          return { ...acc };
        }, {...state.books});
        state.books = { ...booksData };
      }
    }
  }
});

export const reducer = bookSlice.reducer;
export const actions = bookSlice.actions;