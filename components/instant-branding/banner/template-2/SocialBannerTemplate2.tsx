  "use client"

  import * as React from "react";
  import { cn } from "@/lib/utils";
  import { CommonComponetProps } from "../../../types";
  import Ellipse from "@/public/background-svgs/Ellipse";
  import Rectangle from "@/public/background-svgs/Rectangle";
  import Image from "next/image";

  /**
   * A customizable social media banner component
   */
  function SocialBannerTemplate2({
    data,
    commonConfig,
    brandConfig,
    className = "",
  }: CommonComponetProps) {
    // Extract values from props for easier access
    const { width, height, fontSize, buttonStyle, textColor, backdropConfig } =
      commonConfig;
    const {
      primaryColor,
      secondaryColor,
      highlightColor,
      primaryFont,
      secondaryFont,
      highlightFont,
    } = brandConfig;

    const {
      heading,
      description,
      imageUrl,
      imageAlt,
      buttonText,
      communityButtonText,
      ctaButtonText,
    } = data;

    const filterValues = React.useMemo(() => {
      if (!backdropConfig?.backdropColor) return '';
      
      // Convert hex color to RGB
      const hex = backdropConfig?.backdropColor.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      
      // Specifically for teal/blue colors like #2F8992
      if (g > r && b > r && g >= 100 && b >= 100) {
        return `brightness(0.5) sepia(1) hue-rotate(160deg) saturate(${(g+b)/2}%) brightness(${(g+b)/350})`;
      }
      
      // Default formula for other colors
      const rNorm = r / 255;
      const gNorm = g / 255;
      const bNorm = b / 255;
      
      return `brightness(0) saturate(100%) invert(${Math.round(rNorm * 100)}%) sepia(${Math.round(gNorm * 100)}%) saturate(${Math.max(1500, bNorm * 3000)}%) hue-rotate(${Math.round(175 + bNorm * 45)}deg)`;
    }, [backdropConfig?.backdropColor]);

    return (
      <div
        className={cn("relative", className)}
        style={{
          backgroundColor: primaryColor,
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <div className="absolute right-0 w-full h-full">
          <div className="w-full h-full flex justify-end items-center">
            {/* <Rectangle 
              color={`${backdropConfig?.backdropColor}`} 
              // opacity={0.6} 
              className="w-auto h-full"
            /> */}
            <div
              className={`png-background`}
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                  src={`${backdropConfig?.backdropUrl}`}
                  alt="Background"
                  width={width || 1200}
                  height={height || 800}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(100%) brightness(1.2) contrast(0.8)',
                    mixBlendMode: 'multiply',
                  }}
                  priority
                />
                
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: backdropConfig?.backdropColor,
                    opacity:0.9,
                    mixBlendMode: 'multiply',
                  }}
                >
              </div>    
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-[20%_60%_20%]">
          {/* JOIN OUR COMMUNITY button at top left */}
          <div
            className={`pl-[40px] pt-[40px]`}
            style={{ fontFamily: secondaryFont }}
          >
            <div
              className={`py-[10px] px-[16px] text-[16px] w-[231px] h-[44px]`}
              style={{
                backgroundColor: secondaryColor,
                color: textColor,
                fontFamily: secondaryFont,
                borderRadius: buttonStyle === "rounded" ? "6px" : "0px",
              }}
            >
              {communityButtonText}
            </div>
          </div>

          {/* Main content container with fixed width */}
          <div
            className={cn(
              heading
                ? "justify-center h-[199.15px] w-[837px] my-auto grid grid-cols-[60%_40%] gap-[32px]"
                : "h-[199.15px] my-auto justify-items-center-safe"
            )}
          >
            {/* Left content area - titles */}
            <div
              className={cn(
                heading
                  ? "h-[130px] tracking-[-.05em] leading-[100%] font-semibold text-right"
                  : ""
              )}
              style={{
                fontSize: `${fontSize?.heading}`,
                fontFamily: secondaryFont,
                color: textColor,
              }}
            >
              {heading}
            </div>

            {/* Right content area - sub-titles */}
            <div
              className={cn(
                heading
                  ? "grid grid-rows-[65%_35%] w-[342px] h-[199px]"
                  : "grid grid-rows-[60%_40%] gap-[32px] h-[135px] w-[559px]"
              )}
            >
              <div
                className={cn(
                  heading
                    ? "text-left w-[342px] h-[118px] tracking-[-0.05em] leading-[100%] font-normal"
                    : "tracking-[-0.05em] leading-[100%] h-[54px] w-[559px]"
                )}
                style={{
                  fontSize: `${fontSize?.description}`,
                  fontFamily: secondaryFont,
                  color: textColor,
                }}
              >
                {description}
              </div>
              <div className="flex items-end">
                <div
                  className={`text-center p-[14.08px] tracking-[-.05em] leading-[100%] text-[24.63px] font-semibold h-[49px] w-[188px]}`}
                  style={{
                    backgroundColor: highlightColor,
                    color: textColor,
                    fontFamily: highlightFont,
                    borderRadius: buttonStyle === "rounded" ? "6px" : "0px",
                  }}
                >
                  {ctaButtonText}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Headshot with light effect */}
          <div className="relative h-full overflow-hidden rounded-lg">
            {/* Headshot image */}
            <img
              src={imageUrl}
              alt={imageAlt}
              className="object-cover object-right"
              style={{
                height: `396px`,
                width: `486px`,
                top: "-60px",
                left: "-60px",
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  export default SocialBannerTemplate2;
