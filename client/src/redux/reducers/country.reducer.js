import { createSlice } from "@reduxjs/toolkit";
import { getAllCountries, getCountryById } from "../actions/country.action";

const initialState = {
  countries: [],
  country: {},
  filtrados: [],
  loading: null,
  continent: "all",
  activity: "all",
  dir: "",
  value: "",
  search: "",
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
        state.dir = payload.dir
        state.value = payload.value
      },
      setContinent: (state, { payload }) => {
        state.continent = payload
      },
      setActivity: (state, { payload }) => {
        state.activity = payload
      },
      setSearch: (state, { payload }) => {
        state.search = payload
      },
      setBuscar: (state) => {
        let resp = state.countries

        if (state.continent === "all" && state.activity === "all") {
          resp = state.countries
        } else if (state.continent !== "all" && state.activity === "all") {
          resp = resp.filter(c => c.continent === state.continent)
        } else if (state.continent === "all" && state.activity !== "all") {
          resp = resp.filter(c => c.activities.some(a => a.name === state.activity))
        } else {
          resp = resp.filter(c => c.continent === state.continent)
          resp = resp.filter(c => c.activities.some(a => a.name === state.activity))
        }

        if (state.value === "name") {
          if (state.dir === "asc") {
            resp = resp.sort((a, b) => {
              const nameA = a.name.toUpperCase();
              const nameB = b.name.toUpperCase();
              if (nameA < nameB) return -1
              if (nameA > nameB) return 1;
              return 0
            })
          } else {
            resp = resp.sort((a, b) => {
              const nameA = a.name.toUpperCase();
              const nameB = b.name.toUpperCase();
              if (nameA > nameB) return -1;
              if (nameA < nameB) return 1;
              return 0
            })
          }
        } else {
          if (state.dir === "asc") {
            resp = resp.sort((a, b) => a.population - b.population)
          } else {
            resp = resp.sort((a, b) => b.population - a.population)
          }
        }

        if (state.search !== "") {
          state.filtrados = resp.filter(c => c.name.toUpperCase().includes(state.search.toUpperCase()));
        } else {
          state.filtrados = resp
        }
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

export const { setLoading, setFiltrados, setOrden, setContinent, setActivity, setBuscar, setSearch } = countryStore.actions
export default countryStore.reducer;