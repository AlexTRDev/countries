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
      },
      setOrden: (state, { payload }) => {

        const dir = payload.dir
        const value = payload.value
        console.log(payload);
        if (value === "name") {
          if (dir === "asc") {
            state.filtrados = state.filtrados.sort((a, b) => {
              const nameA = a.name.toUpperCase();
              const nameB = b.name.toUpperCase();

              if (nameA < nameB) {
                return -1
              };
              if (nameA > nameB) return 1;
              return 0
            })
          } else {
            state.filtrados = state.filtrados.sort((a, b) => {
              const nameA = a.name.toUpperCase();
              const nameB = b.name.toUpperCase();
              if (nameA > nameB) return -1;
              if (nameA < nameB) return 1;
              return 0
            })
          }
        } else {
          if (dir === "asc") {
            state.filtrados = state.filtrados.sort((a, b) => a.population - b.population)
          } else {
            state.filtrados = state.filtrados.sort((a, b) => b.population - a.population)
          }
        }

        // state.filtrados = payload ? state.filtrados.sort((a, b) => a.id - b.id) : state.filtrados.sort((a, b) => b.id - a.id)
      },
      setContinent: (state, { payload }) => {
        state.filtrados = state.countries.filter(c => c.continent === payload)
      },
      setActivity: (state, { payload }) => {
        state.filtrados = state.countries.filter(c => c.activities.some(a => a.name === payload))
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
          state.filtrados = payload.data
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

export const { setLoading, setFiltrados, setOrden, setContinent, setActivity } = countryStore.actions
export default countryStore.reducer;