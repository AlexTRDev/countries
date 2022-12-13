import { createSlice } from "@reduxjs/toolkit";
import { getAllCountries } from "../actions/country.action";

const initialState = {
  countries: [],
  country: {},
  loading: null,
}

const countryStore = createSlice(
  {
    name: "countries",
    initialState,
    reducers: {
      // Para acciones syncronas
      setLoading: (state) => {
        state.loading = !state.loading
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(getAllCountries.pending, (state) => {
          state.loading = false
        })
        .addCase(getAllCountries.fulfilled, (state, { payload }) => {
          state.loading = false
          state.countries = payload.data
        })
        .addCase(getAllCountries.rejected, (state) => {
          state.loading = false
        })

      // You can chain calls, or have separate `builder.addCase()` lines each time
      // .addCase(decrement, (state, action) => {})
      // You can match a range of action types
      // .addMatcher(
      //   isRejectedAction,
      //   // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
      //   (state, action) => { }
      // )
      // and provide a default case if no other handlers matched
      // .addDefaultCase((state, action) => {  })
    },
  }
)

export const { setLoading } = countryStore.actions
export default countryStore.reducer;