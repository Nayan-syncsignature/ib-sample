import { Data } from "@/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Data = {
  heading: "Welcome to our platform",
  subHeading: "Discover what we have to offer",
  description: "Our platform provides you with everything you need to succeed.",
  imageUrl: "https://example.com/default-image.jpg",
  imageAlt: "Platform overview",
  buttonText: "Get Started",
  communityButtonText: "Join Community",
  ctaButtonText: "Learn More",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setHeading: (state, action: PayloadAction<string>) => {
      state.heading = action.payload;
    },
    setSubHeading: (state, action: PayloadAction<string>) => {
      state.subHeading = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setImageUrl: (state, action: PayloadAction<string>) => {
      state.imageUrl = action.payload;
    },
    setImageAlt: (state, action: PayloadAction<string>) => {
      state.imageAlt = action.payload;
    },
    setButtonText: (state, action: PayloadAction<string>) => {
      state.buttonText = action.payload;
    },
    setCommunityButtonText: (state, action: PayloadAction<string>) => {
      state.communityButtonText = action.payload;
    },
    setCtaButtonText: (state, action: PayloadAction<string>) => {
      state.ctaButtonText = action.payload;
    },
    updateAllContent: (state, action: PayloadAction<Partial<Data>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetContent: () => initialState,
  },
});

export const {
  setHeading,
  setSubHeading,
  setDescription,
  setImageUrl,
  setImageAlt,
  setButtonText,
  setCommunityButtonText,
  setCtaButtonText,
  updateAllContent,
  resetContent,
} = dataSlice.actions;

export default dataSlice.reducer;
