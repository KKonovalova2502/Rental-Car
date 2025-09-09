import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter, selectNumberFilter } from '../filters/selectors';

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (contacts, nameFilter, numberFilter) => {
    const normalizedName = nameFilter.toLowerCase().trim();
    const normalizedNumber = numberFilter.trim();

    return contacts.filter((contact) => {
      const matchByName =
        normalizedName === '' ||
        contact.name.toLowerCase().includes(normalizedName);
      const matchByNumber =
        normalizedNumber === '' || contact.number.includes(normalizedNumber);
      return matchByName && matchByNumber;
    });
  },
);
