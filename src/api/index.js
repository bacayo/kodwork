import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://www.themuse.com/api/public/';
axios.defaults.baseURL = BASE_URL;

export const listJobsAsync = createAsyncThunk(
  'listJobsSlice/listJobsAsync',
  async page => {
    const response = await axios.get(`jobs?page=${page}`);
    return response.data;
  },
);

export const listJobByIdAsync = createAsyncThunk(
  'listJobByIdSlice/listJobByIdAsync',
  async id => {
    const response = await axios.get(`jobs/${id}`);
    return response.data;
  },
);
