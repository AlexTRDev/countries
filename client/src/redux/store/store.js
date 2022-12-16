import { configureStore } from "@reduxjs/toolkit";
import countryStore from "../reducers/country.reducer";
import activityStore from "../reducers/activity.reducer";

const store = configureStore({
  reducer: {
    countryStore,
    activityStore
  }
})

export { store }