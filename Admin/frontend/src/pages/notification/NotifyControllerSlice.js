import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import notificationService from "./notificationService";


  // Create New Product
  export const createNotificationService = createAsyncThunk(
    "products/create",
    async (formData, thunkAPI) => {
      try {
        return await notificationService.createnotificationService(formData);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message);
        return thunkAPI.rejectWithValue(message);
      }
    }
  );
  