import React from "react";

const SocialPost = React.lazy(
  () => import("@/modules/Canvas/components/SocialPost")
);
const Carousel = React.lazy(
  () => import("@/modules/Canvas/components/Carousel")
);
const SocialBannerWrapper = React.lazy(
  () => import("@/modules/Canvas/components/SocialBannerWrapper")
);

export const componentMap = {
  "social-post": SocialPost,
  carousel: Carousel,
  "social-banner": SocialBannerWrapper,
} as const;

export type ComponentType = keyof typeof componentMap;
