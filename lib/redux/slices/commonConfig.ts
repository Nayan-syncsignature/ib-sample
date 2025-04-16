import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PlatformDimension {
  width: number;
  height: number;
}

export interface CanvasDimensionsState {
  width: number;
  height: number;
}

const initialState: CanvasDimensionsState = {
  width: 1584,
  height: 396
};

const canvasDimensionsSlice = createSlice({
  name: 'canvasDimensions',
  initialState,
  reducers: {
    setDimensions: (state, action: PayloadAction<CanvasDimensionsState>) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
    setWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    resetDimensions: (state) => {
      state.width = initialState.width;
      state.height = initialState.height;
    },
    updateFromPlatform: (state, action: PayloadAction<PlatformDimension>) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
    }
  }
});

export const {
  setDimensions,
  setWidth,
  setHeight,
  resetDimensions,
  updateFromPlatform
} = canvasDimensionsSlice.actions;

export default canvasDimensionsSlice.reducer;