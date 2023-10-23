// // recordSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Define an initial state
// const initialState = {
//   records: [],
//   status: 'idle',
//   error: null,
// };

// // Create an async thunk for inserting a record
// export const insertRecord = createAsyncThunk('record/insertRecord', async (data, { rejectWithValue }) => {
//   try {
//     const response = await fetch('http://localhost:5200/api/Records', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json; charset=UTF-8',
//       },
//       body: JSON.stringify(data),
    
//     });

//     if (!response.ok) {
//       throw new Error('Failed to insert record');
//     }

//     const insertedRecord = await response.json();
//     return insertedRecord;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });

// // Create a slice
// const recordSlice = createSlice({
//   name: 'record',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(insertRecord.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(insertRecord.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.records.push(action.payload);
//       })
//       .addCase(insertRecord.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export default recordSlice.reducer;





























import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//getRecords
// export const getRecords = createAsyncThunk(
//   'Records/getRecords',
//   async(_, thunkAPI) => {
//     const {rejectWithValue} = thunkAPI
//   try {
//     const res = await fetch('http://localhost:5200/api/Records');
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// })
export const getRecords = createAsyncThunk(
  'Records/getRecords',
  async(_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = 'http://localhost:5200/api/Records';
      console.log('Fetching from:', url);

      const res = await fetch(url);
      console.log('Response status:', res.status);

      if (!res.ok) {
        // Handle non-2xx HTTP status codes
        console.error('Fetch failed with status:', res.status);
        return rejectWithValue('Fetch failed');
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      return rejectWithValue(error.message);
    }
  }
);




export const recordSlice = createSlice({
  name: 'records',
  initialState: {records: [] , isLoading: false, error: null , readBook:null},
  reducers: {},
  extraReducers: {
    //getRecords
    [getRecords.pending]: (state, action) => {
      state.isLoading = true
      state.error = false      
    },
    [getRecords.fulfilled]: (state, action) => {
      state.isLoading = false
      console.log(action);
      state.records = action.payload;      
    },
    [getRecords.rejected]: (state, action) => {
      state.isLoading = false
      console.log(action);
      state.error = action.payload
    },
  }
})


export default recordSlice.reducer
