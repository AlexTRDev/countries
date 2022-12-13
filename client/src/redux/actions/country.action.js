import { createAsyncThunk } from "@reduxjs/toolkit";

const getAllCountries = createAsyncThunk(
  "@GETALL/COUNTRIES",
  async () => {
    try {
      const result = await fetch("http://localhost:4000/api/v1/countries")
      const data = await result.json()
      return data
    } catch (e) {
      return e.message
    }
  }
)

const getCountryById = createAsyncThunk(
  "@GETBYID/COUNTRIES",
  async (idPais) => {
    try {

      const result = await fetch(`http://localhost:4000/api/v1/countries/${idPais}`)
      const data = await result.json()
      return data
    } catch (error) {
      return error.message
    }
  }
)


export {
  getAllCountries,
  getCountryById
}