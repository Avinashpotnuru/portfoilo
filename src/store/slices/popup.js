import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerPopup: { status: false, helperData: null },
};

const popSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openHeaderPopup: (state, action) => {
      state.headerPopup.status = true;
      state.headerPopup.helperData = action.payload;
    },

    closeHeaderPopup: (state, action) => {
      state.headerPopup.status = false;
      state.headerPopup.helperData = null;
    },
  },
});

export const { openHeaderPopup, closeHeaderPopup } = popSlice.actions;
export default popSlice.reducer;
