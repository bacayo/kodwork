import {createSlice} from '@reduxjs/toolkit';

import {listJobsAsync} from '../../api';

const listJobsSlice = createSlice({
  name: 'listJobsSlice',
  initialState: {
    isLoading: false,
    error: null,
    items: undefined,
  },
  reducers: {},
  extraReducers: {
    [listJobsAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [listJobsAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload.results;
    },
    [listJobsAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      console.log(state.error);
    },
  },
});

export default listJobsSlice.reducer;
