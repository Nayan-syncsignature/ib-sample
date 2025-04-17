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
  // Banner content data
  // const bannerData = {
  //   heading: "Build a Memorable Personal Brand, Without Hiring a Team",
  //   description:
  //     "Your all-in-one personal brand OS — from strategy to content, made simple.",
  //   imageUrl:
  //     "https://s3-alpha-sig.figma.com/img/707e/c151/75eeca732fe81415fc6105b91f38697f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SrN5DdIFFqvCpiAvAqXW85YS0W6yCIPBySsFyUAZFftWH~BRfVTfq6Wn3HE5sHPc6I6P4Ctrq4-M87sKBKVaqZvl2xTirExbOtormQ4QMNcVxwXyHWr2eH7JDeCe3Rz0BPZkrXbxQqkIUy86mJJ5h7YYr-zeTGE6ao7BtcoC8P1qGjg4XbXR8YsifZIMn4pnYpaYoSi1wNOBolik4z~VMc6My2OKYqlJSq28KhqL4NVTXs79Wc5Shu6LCQ09BzU02U3iGP8nMvvOisqhsjeUnkwbR~8vDliij6CkAB1TKLLDFRWNBvrBASMbgH38cYtMRu-7aHyQJLgW1d20yHpr4Q__", // Replace with your actual image
  //   imageAlt: "Professional headshot",
  //   buttonText: "Get Started",
  //   communityButtonText: "JOIN OUR COMMUNITY",
  //   ctaButtonText: "Start Free Trial",
  // };

  // // Layout and styling configuration
  // const commonConfig = {
  //   width: width || 1200, // Use width from useCanvasDimensions hook
  //   height: height || 630, // Use height from useCanvasDimensions hook
  //   fontSize: {
  //     heading: "48px",
  //     description: "4xl",
  //     button: 20,
  //   },
  //   textColor: "white",
  //   svgConfig: {
  //     svgUrl: "https://i.postimg.cc/WbJNvqnF/img.png",
  //     svgPosition: "right center",
  //   },
  // };


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
