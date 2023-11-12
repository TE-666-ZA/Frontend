import toggleState from "./types/toggleState";
import { createSlice } from "@reduxjs/toolkit";

const savedTheme = localStorage.getItem("theme");

const initial: toggleState = {
  nightMode: savedTheme ? JSON.parse(savedTheme) : false
};

export const toggleSlice = createSlice({
  name: "NIGHT_MODE",
  initialState: initial,
  reducers: {
    toggleNight: (state) => {
      state.nightMode = !state.nightMode;
    }
  }

});

export const { toggleNight } = toggleSlice.actions;