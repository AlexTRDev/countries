import { configureStore } from "@reduxjs/toolkit";
import countriesStore from "../reducers/country.reducer";
import activityStore from "../reducers/activity.reducer";

const store = configureStore({
  reducer: {
    countriesStore,
    activityStore
  }
})

export { store }