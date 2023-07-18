import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    value: [],
    error: '',
}

const MISSIONURL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('fetchMissions', async () => {
    const response = await axios.get(MISSIONURL);
    console.log((await response).data)
    const missions = await response.data.map((result) => ({
        id:result.mission_id,
        name:result.mission_name,
        description: result.description,
        joined:false,
    }))
    console.log(missions)
    return missions;
})

const missionSlice = createSlice({
    name: 'missions',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchMissions.pending, (state) => {
            state.loading = true;
            console.log('loading')
        });
        builder.addCase(fetchMissions.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload)
            state.value = action.payload;
            state.error = '';
        });
        builder.addCase(fetchMissions.rejected, (state, action) => {
            state.loading = false;
            state.value = [];
            state.error = action.error.message;
            console.log('rejected')
        });
    }
})

export default missionSlice.reducer;