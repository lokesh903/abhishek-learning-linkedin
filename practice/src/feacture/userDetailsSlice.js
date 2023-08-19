import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async Thunks
export const createUser = createAsyncThunk('createUser', async (data, { rejectWithValue }) => {
   try {
      const response = await fetch('https://64de1f54825d19d9bfb21e0e.mockapi.io/crud', {
         method: 'post',
         headers: {
            'Content-Type': 'application/json', 
         },
         body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
   } catch (err) {
      return rejectWithValue(err); 
   }
});

export const showUser = createAsyncThunk('showUser', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch('https://64de1f54825d19d9bfb21e0e.mockapi.io/crud');
        const result = await response.json();
        return result;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const deleteuser = createAsyncThunk('deleteuser', async (id, { rejectWithValue }) => {
    try {
        const response = await fetch(`https://64de1f54825d19d9bfb21e0e.mockapi.io/crud/${id}`, { method: 'DELETE' });
        const result = await response.json();
        return { id, result }; 
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const updateuser = createAsyncThunk('updateuser', async (data, { rejectWithValue }) => {
   try {
      const { id, ...updateData } = data;
      const response = await fetch(`https://64de1f54825d19d9bfb21e0e.mockapi.io/crud/${id}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(updateData),
      });

      const result = await response.json();
      return { id, result };
   } catch (err) {
      return rejectWithValue(err);
   }
});

// userDetails Slice
const userDetails = createSlice({
   name: 'userDetails',
   initialState: {
      users: [],
      loading: false,
      error: null,
      searchData:[],

   },
   reducers: {
      searchData:(state,action)=>{
        state.searchData=action.payload;
     },
   }, // You can add your own custom reducers here

   extraReducers: (builder) => {
      builder
         .addCase(createUser.pending, (state) => {
            state.loading = true;
         })
         .addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
         })
         .addCase(createUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         .addCase(showUser.pending, (state) => {
            state.loading = true;
         })
         .addCase(showUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
         })
         .addCase(showUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         .addCase(deleteuser.pending, (state) => {
            state.loading = true;
         })
         .addCase(deleteuser.fulfilled, (state, action) => {
            state.loading = false;
            const { id, result } = action.payload;
            if (id && result) {
                state.users = state.users.filter((user) => user.id !== id);
            }
         })
         .addCase(deleteuser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         .addCase(updateuser.pending, (state) => {
            state.loading = true;
         })
         .addCase(updateuser.fulfilled, (state, action) => {
            state.loading = false;
            const { id, result } = action.payload;
            if (id && result) {
                state.users = state.users.map((user) =>
                    user.id === id ? { ...user, ...result } : user
                );
            }
         })
         .addCase(updateuser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         });
   },
});

export default userDetails.reducer;
export  const {searchData}=userDetails.actions;
