import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchSites = createAsyncThunk(
    'sites/fetchSites',
    async () => {
        const response = await fetch(baseUrl + 'sites');
        return response.json();
    }
);

const sitesSlice = createSlice({
    name: 'sites',
    initialState: { isLoading: true, errMess: null, sitesArray: [] },
    reducers: {},
    extraReducers: {
        [fetchSites.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchSites.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.sitesArray = action.payload;
        },
        [fetchSites.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const sitesReducer = sitesSlice.reducer;