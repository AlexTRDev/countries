import { createSlice } from "@reduxjs/toolkit";
import { getAllCountries, getCountryById } from "../actions/country.action";

const initialState = {
  countries: [],
  country: {},
  filtrados: [],
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
      },
      setFiltrados: (state, { payload }) => {
        state.filtrados = payload
      }
    },
    // Para acciones asyncronas
    extraReducers: (builder) => {
      //get-all 
      builder
        .addCase(getAllCountries.pending, (state) => {
          state.loading = true
        })
        .addCase(getAllCountries.fulfilled, (state, { payload }) => {
          state.loading = false
          state.countries = payload.data
        })
        .addCase(getAllCountries.rejected, (state) => {
          state.loading = true
        })
      // get-byId
      builder
        .addCase(getCountryById.pending, (state) => {
          state.loading = true;
        })
        .addCase(getCountryById.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.country = payload.data;
        })
        .addCase(getCountryById.rejected, (state) => {
          state.loading = true;
        })
    },
  }
)

export const { setLoading, setFiltrados } = countryStore.actions
export default countryStore.reducer;