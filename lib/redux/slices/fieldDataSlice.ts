import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TextContentState {
  title: string;
  description: string;
  cta: string;
  showTitle: boolean;
  showDescription: boolean;
  showCta: boolean;
}

const initialState: TextContentState = {
  title: 'Users read this first. Make it count.',
  description: 'They will read this second. Keep things interesting.',
  cta: 'Call them to action',
  showTitle: true,
  showDescription: true,
  showCta: true
};

const textContentSlice = createSlice({
  name: 'textContent',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setSubTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setCta: (state, action: PayloadAction<string>) => {
      state.cta = action.payload;
    },
    toggleTitleVisibility: (state, action: PayloadAction<boolean>) => {
      state.showTitle = action.payload;
    },
    toggleSubTitleVisibility: (state, action: PayloadAction<boolean>) => {
      state.showTitle = action.payload;
    },
    toggleDescriptionVisibility: (state, action: PayloadAction<boolean>) => {
      state.showDescription = action.payload;
    },
    toggleCtaVisibility: (state, action: PayloadAction<boolean>) => {
      state.showCta = action.payload;
    },
    resetTextContent: (state) => {
      return initialState;
    },
    updateAllContent: (state, action: PayloadAction<Partial<TextContentState>>) => {
      return { ...state, ...action.payload };
    }
  }
});

export const {
  setTitle,
  setDescription,
  setCta,
  toggleTitleVisibility,
  toggleDescriptionVisibility,
  toggleCtaVisibility,
  resetTextContent,
  updateAllContent
} = textContentSlice.actions;

export default textContentSlice.reducer;