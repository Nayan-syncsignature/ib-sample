import { CommonConfig } from "@/components/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PlatformDimension {
  width: number;
  height: number;
}

const initialState: CommonConfig = {
  width: 1584,
  height: 396,
  buttonStyle: "rounded",
  fontSize: {
    heading: "48px",
    description: "32px",
    ctaButton: "18",
    communityButton: "",
  },
  backdropConfig: {
    backdropUrl: "https://i.postimg.cc/WbJNvqnF/img.png",
    backdropPosition: "right center",
  },
  textColor: "#000000",
  fontFamily: "Arial",
  highlightColor: "transparent",
  isBold: false,
  isItalic: false,
  isUnderlined: false,
  textContent: "Your banner text here",
};

const commonConfigSlice = createSlice({
  name: "commonConfig",
  initialState,
  reducers: {
    setDimensions: (state, action: PayloadAction<Partial<CommonConfig>>) => {
      return { ...state, ...action.payload };
    },
    setWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    setButtonStyle: (state, action: PayloadAction<"rounded" | "square">) => {
      state.buttonStyle = action.payload;
    },
    setFontSize: (
      state,
      action: PayloadAction<{
        heading?: string;
        description?: string;
        button?: number;
      }>
    ) => {
      state.fontSize = { ...state.fontSize, ...action.payload };
    },
    setBackdropConfig: (
      state,
      action: PayloadAction<{
        backdropUrl?: string;
        backdropPosition?: string;
      }>
    ) => {
      state.backdropConfig = { ...state.backdropConfig, ...action.payload };
    },
    setTextColor: (state, action: PayloadAction<string>) => {
      state.textColor = action.payload;
    },
    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload;
    },
    setHighlightColor: (state, action: PayloadAction<string>) => {
      state.highlightColor = action.payload;
    },
    toggleBold: (state) => {
      state.isBold = !state.isBold;
    },
    toggleItalic: (state) => {
      state.isItalic = !state.isItalic;
    },
    toggleUnderline: (state) => {
      state.isUnderlined = !state.isUnderlined;
    },
    setTextContent: (state, action: PayloadAction<string>) => {
      state.textContent = action.payload;
    },
    resetDimensions: () => initialState,
    updateFromPlatform: (state, action: PayloadAction<PlatformDimension>) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
  },
});

export const {
  setDimensions,
  setWidth,
  setHeight,
  setButtonStyle,
  setFontSize,
  setBackdropConfig,
  setTextColor,
  setFontFamily,
  setHighlightColor,
  toggleBold,
  toggleItalic,
  toggleUnderline,
  setTextContent,
  resetDimensions,
  updateFromPlatform,
} = commonConfigSlice.actions;

export default commonConfigSlice.reducer;
