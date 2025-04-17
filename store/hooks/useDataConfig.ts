import { useAppSelector, useAppDispatch } from "../typedHooks";
import {
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
} from "../slices/dataSlice";
import { Data } from "@/components/types";

export const useDataConfig = () => {
  const data = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  // Set individual content properties
  const updateHeading = (heading: string) => dispatch(setHeading(heading));
  const updateSubHeading = (subHeading: string) =>
    dispatch(setSubHeading(subHeading));
  const updateDescription = (description: string) =>
    dispatch(setDescription(description));
  const updateImageUrl = (url: string) => dispatch(setImageUrl(url));
  const updateImageAlt = (alt: string) => dispatch(setImageAlt(alt));
  const updateButtonText = (text: string) => dispatch(setButtonText(text));
  const updateCommunityButtonText = (text: string) =>
    dispatch(setCommunityButtonText(text));
  const updateCtaButtonText = (text: string) =>
    dispatch(setCtaButtonText(text));

  // Reset all content
  const resetAllContent = () => dispatch(resetContent());

  // Bulk update
  const updateContent = (content: Partial<Data>) => {
    dispatch(updateAllContent({ ...data, ...content }));
  };

  return {
    data,
    updateHeading,
    updateSubHeading,
    updateDescription,
    updateImageUrl,
    updateImageAlt,
    updateButtonText,
    updateCommunityButtonText,
    updateCtaButtonText,
    resetAllContent,
    updateContent,
  };
};
