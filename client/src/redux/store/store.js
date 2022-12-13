import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../reducers/country.reducer";

const store = configureStore({
  reducer: {
    countriesStore: countryReducer,
  }
})

export { store }