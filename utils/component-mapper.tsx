import React from "react";

const SocialPost = React.lazy(
  () => import("@/modules/Canvas/components/SocialPost")
);
const Carousel = React.lazy(
  () => import("@/modules/Canvas/components/Carousel")
);
const SocialBanner = React.lazy(
  () => import("@/modules/Canvas/components/SocialBanner")
);

export const componentMap = {
  "social-post": SocialPost,
  carousel: Carousel,
  "social-banner": SocialBanner,
} as const;

export type ComponentType = keyof typeof componentMap;
