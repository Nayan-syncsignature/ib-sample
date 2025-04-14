// lib/redux/hooks/useBrandConfig.ts
import { useAppSelector, useAppDispatch } from '../typedHooks';
import {
  updatePrimaryColor,
  updateSecondaryColor,
  updateHighlightColor,
  updatePrimaryFont,
  updateSecondaryFont,
  updateHighlightFont,
  updateBrandConfig,
  BrandConfigState
} from '../slices/brandConfigSlice';

export const useBrandConfig = () => {
  const brandConfig = useAppSelector(state => state.brandConfig);
  const dispatch = useAppDispatch();

  const setBrandConfig = (config: Partial<BrandConfigState>) => {
    dispatch(updateBrandConfig(config));
  };

  const setPrimaryColor = (color: string) => {
    dispatch(updatePrimaryColor(color));
  };

  const setSecondaryColor = (color: string) => {
    dispatch(updateSecondaryColor(color));
  };

  const setHighlightColor = (color: string) => {
    dispatch(updateHighlightColor(color));
  };

  const setPrimaryFont = (font: string) => {
    dispatch(updatePrimaryFont(font));
  };

  const setSecondaryFont = (font: string) => {
    dispatch(updateSecondaryFont(font));
  };

  const setHighlightFont = (font: string) => {
    dispatch(updateHighlightFont(font));
  };

  return {
    // Current state
    brandConfig,

    // Individual properties
    primaryColor: brandConfig.primaryColor,
    secondaryColor: brandConfig.secondaryColor,
    highlightColor: brandConfig.highlightColor,
    primaryFont: brandConfig.primaryFont,
    secondaryFont: brandConfig.secondaryFont,
    highlightFont: brandConfig.highlightFont,

    // Setters
    setBrandConfig,
    setPrimaryColor,
    setSecondaryColor,
    setHighlightColor,
    setPrimaryFont,
    setSecondaryFont,
    setHighlightFont
  };
};