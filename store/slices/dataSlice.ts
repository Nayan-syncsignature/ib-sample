import { Data } from "@/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Data = {
  heading: "Welcome to our platform",
  subHeading: "Discover what we have to offer",
  description: "Our platform provides you with everything you need to succeed.",
  imageUrl:
    "https://s3-alpha-sig.figma.com/img/707e/c151/75eeca732fe81415fc6105b91f38697f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SrN5DdIFFqvCpiAvAqXW85YS0W6yCIPBySsFyUAZFftWH~BRfVTfq6Wn3HE5sHPc6I6P4Ctrq4-M87sKBKVaqZvl2xTirExbOtormQ4QMNcVxwXyHWr2eH7JDeCe3Rz0BPZkrXbxQqkIUy86mJJ5h7YYr-zeTGE6ao7BtcoC8P1qGjg4XbXR8YsifZIMn4pnYpaYoSi1wNOBolik4z~VMc6My2OKYqlJSq28KhqL4NVTXs79Wc5Shu6LCQ09BzU02U3iGP8nMvvOisqhsjeUnkwbR~8vDliij6CkAB1TKLLDFRWNBvrBASMbgH38cYtMRu-7aHyQJLgW1d20yHpr4Q__",
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
