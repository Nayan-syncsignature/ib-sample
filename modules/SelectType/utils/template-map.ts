import React from "react";

const SocialBannerTemplate1 = React.lazy(
  () => import("@/components/instant-branding/banner/template-1")
);
const SocialBannerTemplate2 = React.lazy(
  () => import("@/components/instant-branding/banner/template-2")
);

export const templateMap = {
  "social-banner-template-1": SocialBannerTemplate1,
  "social-banner-template-2": SocialBannerTemplate2,
} as const;

export type ComponentType = keyof typeof templateMap;
