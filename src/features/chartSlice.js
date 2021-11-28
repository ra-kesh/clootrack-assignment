import { createSlice } from "@reduxjs/toolkit";
import { fetchChartData } from "./chartService";

export const chartSlice = createSlice({
  name: "chart",

  initialState: {
    chartData: [],
    type: "",
    elements: [],
    loading: false,
    error: "",
  },

  reducers: {
    changeChartType: (state, action) => {
      state.type = action.payload;
    },
    changeChartElememts: (state, action) => {
      state.elements = action.payload;
    },
  },

  extraReducers: {
    [fetchChartData.pending]: (state) => {
      state.loading = true;
    },
    [fetchChartData.fulfilled]: (state, action) => {
      state.chartData = action.payload.chartData;
      state.loading = false;
    },
    [fetchChartData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const { changeChartType, changeChartElememts } = chartSlice.actions;

export default chartSlice.reducer;
