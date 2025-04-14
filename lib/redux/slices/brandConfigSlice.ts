// src/lib/redux/slices/brandConfigSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BrandConfigState {
  primaryColor: string;
  secondaryColor: string;
  highlightColor: string;
  primaryFont: string;
  secondaryFont: string;
  highlightFont: string;
}

const initialState: BrandConfigState = {
  primaryColor: '#0070f3',
  secondaryColor: '#f5f5f5',
  highlightColor: '#ff0080',
  primaryFont: 'Inter',
  secondaryFont: 'Roboto',
  highlightFont: 'Montserrat'
};

const brandConfigSlice = createSlice({
  name: 'brandConfig',
  initialState,
  reducers: {
    updatePrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
    updateSecondaryColor: (state, action: PayloadAction<string>) => {
      state.secondaryColor = action.payload;
    },
    updateHighlightColor: (state, action: PayloadAction<string>) => {
      state.highlightColor = action.payload;
    },
    updatePrimaryFont: (state, action: PayloadAction<string>) => {
      state.primaryFont = action.payload;
    },
    updateSecondaryFont: (state, action: PayloadAction<string>) => {
      state.secondaryFont = action.payload;
    },
    updateHighlightFont: (state, action: PayloadAction<string>) => {
      state.highlightFont = action.payload;
    },
    updateBrandConfig: (state, action: PayloadAction<Partial<BrandConfigState>>) => {
      return { ...state, ...action.payload };
    }
  }
});

export const {
  updatePrimaryColor,
  updateSecondaryColor,
  updateHighlightColor,
  updatePrimaryFont,
  updateSecondaryFont,
  updateHighlightFont,
  updateBrandConfig
} = brandConfigSlice.actions;

export default brandConfigSlice.reducer;