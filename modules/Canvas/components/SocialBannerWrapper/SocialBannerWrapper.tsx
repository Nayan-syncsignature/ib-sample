"use client";

import React from "react";
import SocialBanner from "@/components/instant-branding/social-banner";
import { CommonComponetProps } from "@/components/types";
import LinkedInProfileMockup from "./components/LinkedinProfileMockup";

export default function SocialBannerWrapper({
  data,
  commonConfig,
  brandConfig,
}: CommonComponetProps) {
  return (
    <div
      style={{
        transform: "scale(.7)",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <LinkedInProfileMockup
        data={data}
        commonConfig={commonConfig}
        brandConfig={brandConfig} 
      />

      {/* <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Current Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Brand Config</h3>
            <pre className="bg-white p-3 rounded text-sm overflow-auto">
              {JSON.stringify(brandConfig, null, 2)}
            </pre>
          </div>
        </div>
      </div> */}
    </div>
  );
}
