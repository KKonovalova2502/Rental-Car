import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', { name, number });
      toast.success(`Contact ${res.data.name} added successfully`);
      return res.data;
    } catch (error) {
      toast.error('Failed to add contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      toast.success('Contact deleted successfully');
      return res.data;
    } catch (error) {
      toast.error('Failed to delete contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const res = await axios.patch(`/contacts/${id}`, { name, number });
      toast.success('Contact updated successfully');
      return res.data;
    } catch (error) {
      toast.error('Failed to update contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
