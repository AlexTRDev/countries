import { createSlice } from "@reduxjs/toolkit";
import { createActivity, getAllActivities } from "../actions/activity.action";

const initialState = {
  activities: [],
  activity: {},
  loading: null,
}

const activityStore = createSlice(
  {
    name: "activities",
    initialState,
    reducers: {
      setLoading: (state) => {
        state.loading = !state.loading
      }
    },
    extraReducers: (builder) => {
      // crear
      builder
        .addCase(createActivity.pending, (state) => {
          state.loading = true;
        })
        .addCase(createActivity.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.activity = payload.data;
        })
        .addCase(createActivity.rejected, (state) => {
          state.loading = true;
        })
      // getAll 
      builder
        .addCase(getAllActivities.pending, (state) => {
          state.loading = true;
        })
        .addCase(getAllActivities.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.activities = payload.data;
        })
        .addCase(getAllActivities.rejected, (state) => {
          state.loading = true;
        })
    }
  }
)

export const { setLoading } = activityStore.actions

export default activityStore.reducer