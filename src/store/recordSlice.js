import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//get
export const getRecords = createAsyncThunk(
  'Records/getRecords',
  async(_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const url = 'http://localhost:14957/api/Records';
      console.log('Fetching from:', url);

      const res = await fetch(url);
      console.log('Response status:', res.status);

      if (!res.ok) {
        // Handle non-2xx HTTP status codes
        console.error('Fetch failed with status:', res.status);
        return rejectWithValue('Fetch failed');
      }

      const data = await res.json();
        // Add a 'date' attribute to each record
        const recordsWithDate = data.map((record) => ({
          ...record,
          date: new Date().toISOString(), // You can replace this with your desired date logic
        }));
  
        return recordsWithDate;
    } catch (error) {
      console.error('Fetch error:', error);
      return rejectWithValue(error.message);
    }
  }
);


//add
export const addRecord = createAsyncThunk(
  'Records/addRecord',
  async (recordData, thunkAPI) => {
    try {
      const url = 'http://localhost:14957/api/Records';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // adjust the content type as needed
        },
        body: JSON.stringify(recordData), // JSON-encode the data you want to send
      });

      if (!response.ok) {
        console.error('POST request failed with status:', response.status);
        return thunkAPI.rejectWithValue('Failed to add record');
      }

      const data = await response.json();
      return data; // You can return the created record or any response from the server.
    } catch (error) {
      console.error('POST request error:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);




// delete 
export const deleteRecord = createAsyncThunk(
  'Records/deleteRecord',
  async (recordId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      // Make an API call to delete the record with the provided ID
      const url = `http://localhost:14957/api/Records/${recordId}`;
      const res = await fetch(url, {
        method: 'DELETE',
      });

      if (!res.ok) {
        // Handle non-2xx HTTP status codes
        console.error('Delete failed with status:', res.status);
        return rejectWithValue('Delete failed');
      }

      // Return the deleted record ID or a success message
      return recordId;
    } catch (error) {
      console.error('Delete error:', error);
      return rejectWithValue(error.message);
    }
  }
);

// edit
export const editRecord = createAsyncThunk(
  'Records/editRecord',
  async ({ recordId, updatedData }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      // Make an API call to update the record with the provided ID and data
      const url = `http://localhost:14957/api/Records/${recordId}`;
      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!res.ok) {
        // Handle non-2xx HTTP status codes
        console.error('Edit failed with status:', res.status);
        return rejectWithValue('Edit failed');
      }

      // Return the updated record or a success message
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Edit error:', error);
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

    [addRecord.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [addRecord.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.records.push(action.payload); // Assuming the API returns the newly created record
    },
    [addRecord.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

// delete
    [deleteRecord.fulfilled]: (state, action) => {
      state.isLoading = false;

      // Remove the deleted record from the state using filter
      state.records = state.records.filter((record) => record.id !== action.payload);
    },
    [deleteRecord.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //edit 
    [editRecord.fulfilled]: (state, action) => {
      state.isLoading = false;

      // Update the existing record with the updated data
      state.records = state.records.map((record) =>
        record.id === action.payload.id ? action.payload : record
      );
    },
    [editRecord.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },


  }
})


export default recordSlice.reducer
