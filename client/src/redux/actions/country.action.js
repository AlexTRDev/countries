import { createAsyncThunk } from "@reduxjs/toolkit";

const getAllCountries = createAsyncThunk(
  "@GETALL/COUNTRIES",
  async () => {
    try {
      const result = await fetch("http://localhost:4000/api/v1/countries")
      const data = result.json()
      return data
    } catch (e) {
      return e.message
    }
  }
)

export {
  getAllCountries
}