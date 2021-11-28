import { createAsyncThunk } from "@reduxjs/toolkit";
import { getChartData } from "./chartApi";

export const fetchChartData = createAsyncThunk(
  "chart/fetchChartData",
  async () => {
    const response = await getChartData();
    console.log(response);
    if (response) {
      return {
        chartData: response.data,
        loading: false,
        error: null,
      };
    } else {
      return {
        error: response,
      };
    }
  }
);
