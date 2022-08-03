import {createSlice} from '@reduxjs/toolkit';

import {listJobByIdAsync} from '../../api';

const listJobByIdSlice = createSlice({
  name: 'listJobByIdSlice',
  initialState: {
    isLoading: false,
    error: null,
    item: undefined,
    id: undefined,
  },
  reducers: {},
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
