// lib/redux/hooks/useCanvasDimensions.ts
import { useAppSelector, useAppDispatch } from '../typedHooks';
import {
  setDimensions,
  setWidth,
  setHeight,
  resetDimensions,
  CanvasDimensionsState
} from '../slices/commonConfig';

export const useCanvasDimensions = () => {
  const dimensions = useAppSelector(state => state.canvasDimensions);
  const dispatch = useAppDispatch();

  // Set both width and height at once
  const updateDimensions = (newDimensions: Partial<CanvasDimensionsState>) => {
    dispatch(setDimensions({
      width: newDimensions.width ?? dimensions.width,
      height: newDimensions.height ?? dimensions.height
    }));
  };

  // Set individual dimensions
  const updateWidth = (width: number) => {
    dispatch(setWidth(width));
  };

  const updateHeight = (height: number) => {
    dispatch(setHeight(height));
  };

  // Reset to initial dimensions
  const reset = () => {
    dispatch(resetDimensions());
  };


  return {
    // Current state
    dimensions,
    
    // Individual properties
    width: dimensions.width,
    height: dimensions.height,
    
    // Actions
    updateDimensions,
    updateWidth,
    updateHeight,
    reset
  };
};

export default useCanvasDimensions;