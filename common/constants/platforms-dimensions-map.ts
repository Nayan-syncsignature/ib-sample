// platformDimensionsMap.ts
export interface PlatformDimension {
  width: number;
  height: number;
  dimensions: string;
  type: string;
  platform: string; // Added platform name to each item
}

// Array of platform dimensions
export const platformDimensionsArray: PlatformDimension[] = [
  {
    platform: "LinkedIn Banner",
    width: 1584,
    height: 396,
    dimensions: "1584 x 396 px",
    type: "social-banner",
  },
  {
    platform: "Twitter Banner",
    width: 1500,
    height: 500,
    dimensions: "1500 x 500 px",
    type: "social-banner",
  },
  {
    platform: "Facebook Banner",
    width: 820,
    height: 312,
    dimensions: "820 x 312 px",
    type: "social-banner",
  },
  {
    platform: "Instagram Post",
    width: 1080,
    height: 1080,
    dimensions: "1080 x 1080 px",
    type: "social-post",
  },
  {
    platform: "YouTube Thumbnail",
    width: 1280,
    height: 720,
    dimensions: "1280 x 720 px",
    type: "social-post",
  },
  {
    platform: "Instagram Carousel",
    width: 1280,
    height: 720,
    dimensions: "1280 x 720 px",
    type: "carousel",
  },
];

// Filter dimensions by type using reduce
export const filterDimensionsByType = (type: string): PlatformDimension[] => {
  return platformDimensionsArray.reduce((filtered, platform) => {
    if (platform.type === type) {
      filtered.push(platform);
    }
    return filtered;
  }, [] as PlatformDimension[]);
};
