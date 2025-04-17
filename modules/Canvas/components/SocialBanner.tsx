"use client";

import React from "react";
import { useBrandConfig } from "@/lib/redux/hooks/useBrandConfig";
import { Image } from "lucide-react";
import SocialBanner from "@/components/instant-branding/social-banner";
import { CommonComponetProps } from "@/components/types";

export default function SocialMediaBannerPage({
  data,
  commonConfig,
  brandConfig,
}: CommonComponetProps) {

  return (
    <div
      style={{
        transform: "scale(.7)",
        transformOrigin: "top left",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <SocialBanner
        data={data}
        commonConfig={commonConfig}
        brandConfig={brandConfig} // Uses brandConfig directly from Redux hook
      />

      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Current Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Brand Config</h3>
            <pre className="bg-white p-3 rounded text-sm overflow-auto">
              {JSON.stringify(brandConfig, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
