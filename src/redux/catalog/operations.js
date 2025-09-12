import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global/';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (params, thunkAPI) => {
    try {
      const res = await axios.get('/cars', { params });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchBrands = createAsyncThunk(
  'brands/fetchBrands',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/brands');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getCarById = createAsyncThunk(
  'cars/getById',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/cars/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
