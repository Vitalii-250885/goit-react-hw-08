import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addContactThunk,
  fetchContactsThunk,
  deleteContactThunk,
} from "./contactsOps";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const isPanding = (action) =>
  typeof action.type === "string" && action.type.endsWith("/pending");
const isRejected = (action) =>
  typeof action.type === "string" && action.type.endsWith("/rejected");

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addMatcher(isPanding, (state) => {
        state.error = null;
        state.items = [];
        state.loading = true;
      })
      .addMatcher(isRejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { fetchingInProgres, fetchingSuccess, fetchingError } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// Selectors

export const selectContacts = (state) => state.contacts;
export const selectItems = (state) => state.contacts.items;

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectItems, selectNameFilter],
  (contacts, filterValue) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase());
    });

    return filteredContacts;
  }
);
