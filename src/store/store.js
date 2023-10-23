import { configureStore } from '@reduxjs/toolkit';
import records from './recordSlice';


export default configureStore({
  reducer: {
    records
  },
});

