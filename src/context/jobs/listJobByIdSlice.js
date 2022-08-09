import { createSlice, current } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

import { listJobByIdAsync } from '../../api';

const listJobByIdSlice = createSlice({
  name: 'listJobByIdSlice',
  initialState: {
    isLoading: false,
    error: null,
    item: undefined,
    status: undefined,
    favoriteJobs: [],
    id: undefined,
  },
  reducers: {
    addToFavorites: (state, action) => {
      // same id
      const idInFavorite = state.favoriteJobs.some(
        element => element.id === state.id,
      );
      //if ids do not match add to list
      if (!idInFavorite) {
        state.favoriteJobs.push(state.item);
      } else {
        Alert.alert('This job is already in your list');
      }
    },
    removeFavorites: (state, action) => {
      const filtered = state.favoriteJobs.filter(item => item === state.id);
      state.favoriteJobs = filtered;
    },
  },
  extraReducers: {
    [listJobByIdAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [listJobByIdAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.id = action.payload.id;
      state.item = action.payload;
    },
    [listJobByIdAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      console.log(state.error);
    },
  },
});

export default listJobByIdSlice.reducer;
export const { addToFavorites, removeFavorites } = listJobByIdSlice.actions;
