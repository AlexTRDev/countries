import { createAsyncThunk } from "@reduxjs/toolkit";


const createActivity = createAsyncThunk(
  "@POST/ACTIVITY",
  async (activity) => {
    const result = await fetch("http://localhost:4000/api/v1/activities", {
      method: "POST",
      body: JSON.stringify(activity),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = result.json();
    return data;
  }
)

export {
  createActivity
}