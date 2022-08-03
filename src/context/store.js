import {configureStore} from '@reduxjs/toolkit';

import listJobsSlice from './jobs/listJobsSlice';
import listJobByIdSlice from './jobs/listJobByIdSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    listJobsSlice,
    listJobByIdSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
