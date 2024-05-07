import { createSelector } from "@reduxjs/toolkit";
import { selectItems } from "../contacts/selectors";

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
