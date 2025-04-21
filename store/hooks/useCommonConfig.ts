// lib/redux/hooks/useCommonConfig.ts
import { useAppSelector, useAppDispatch } from "../typedHooks";
import {
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
} from "../slices/commonConfigSlice";
import { CommonConfig } from "@/components/types";

export const useCommonConfig = () => {
  const commonConfig = useAppSelector((state) => state.commonConfig);
  const dispatch = useAppDispatch();

  // Set multiple configuration options at once
  const updateConfig = (newConfig: Partial<CommonConfig>) => {
    dispatch(setDimensions(newConfig));
  };

  // Set individual dimensions
  const updateWidth = (width: number) => {
    dispatch(setWidth(width));
  };

  const updateHeight = (height: number) => {
    dispatch(setHeight(height));
  };

  // Text formatting functions
  const updateTextColor = (color: string) => {
    dispatch(setTextColor(color));
  };

  const updateFontFamily = (font: string) => {
    dispatch(setFontFamily(font));
  };

  const updateHighlightColor = (color: string) => {
    dispatch(setHighlightColor(color));
  };

  const updateBold = () => {
    dispatch(toggleBold());
  };

  const updateItalic = () => {
    dispatch(toggleItalic());
  };

  const updateUnderline = () => {
    dispatch(toggleUnderline());
  };

  const updateTextContent = (content: string) => {
    dispatch(setTextContent(content));
  };

  const updateButtonStyle = (style: "rounded" | "square") => {
    dispatch(setButtonStyle(style));
  };

  const updateFontSize = (sizes: {
    heading?: string;
    description?: string;
    button?: number;
  }) => {
    dispatch(setFontSize(sizes));
  };

  const updateBackdropConfig = (config: {
    backdropUrl?: string;
    backdropPosition?: string;
  }) => {
    dispatch(setBackdropConfig(config));
  };

  // Reset to initial dimensions
  const reset = () => {
    dispatch(resetDimensions());
  };

  return {
    // Current state
    commonConfig,

    // Individual properties
    width: commonConfig.width,
    height: commonConfig.height,
    buttonStyle: commonConfig.buttonStyle,
    fontSize: commonConfig.fontSize,
    backdropConfig: commonConfig.backdropConfig,
    textColor: commonConfig.textColor,
    fontFamily: commonConfig.fontFamily,
    highlightColor: commonConfig.highlightColor,
    isBold: commonConfig.isBold,
    isItalic: commonConfig.isItalic,
    isUnderlined: commonConfig.isUnderlined,
    textContent: commonConfig.textContent,

    // Actions
    updateConfig,
    updateWidth,
    updateHeight,
    updateTextColor,
    updateFontFamily,
    updateHighlightColor,
    updateBold,
    updateItalic,
    updateUnderline,
    updateTextContent,
    updateButtonStyle,
    updateFontSize,
    updateBackdropConfig,
    reset,
  };
};
