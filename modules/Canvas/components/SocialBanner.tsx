"use client";

import React from "react";
import SocialBannerTemplate1 from "@/components/instant-branding/banner/template-1";
import { styles } from "@/components/instant-branding/banner/template-1/styles";
import { useBrandConfig } from "@/store/hooks/useBrandConfig";

export default function SocialMediaBannerPage() {
  // Get brand configuration from Redux
  const brandConfig = useBrandConfig();
  return (
    <div>
      {[...styles].map(({ commonConfig, data, template_key }) => (
        <SocialBannerTemplate1
          data={data}
          commonConfig={commonConfig}
          brandConfig={brandConfig} // Uses brandConfig directly from Redux hook
          key={template_key}
        />
      ))}
    </div>
  );
}
