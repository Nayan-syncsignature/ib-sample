import * as React from "react";
import { cn } from "@/lib/utils";
import { CommonComponetProps } from "../../../types";
import { EllipseSvg } from "@/public/background-svgs";
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
    secondaryFont,
    highlightFont,
  } = brandConfig;

  const {
    heading,
    description,
    imageUrl,
    imageAlt,
    communityButtonText,
    ctaButtonText,
  } = data;

  return (
    <div
      className={cn(
        `relative w-[${width}px] h-[${height}px] bg-[${primaryColor}]`,
        className
      )}
    >
      {/* <div
        className="absolute right-0 w-full h-full"
        style={{
          backgroundImage: `url(${backdropConfig?.backdropUrl})`,
          backgroundSize: `${backdropConfig?.backdropSize}`,
          backgroundPosition: `${backdropConfig?.backdropPosition}`,
          backgroundRepeat: "no-repeat",
        }}
      /> */}
      <Image
        className="absolute right-0 w-full h-full object-right "
        priority
        src={EllipseSvg}
        alt="Background pattern"
      />
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
            dangerouslySetInnerHTML={{ __html: heading ?? "" }}
          ></div>

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
              dangerouslySetInnerHTML={{ __html: description ?? "" }}
            />
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
          {/* <img
            src={imageUrl}
            alt={imageAlt}
            className="object-cover object-right"
            style={{
              height: `396px`,
              width: `486px`,
              top: "-60px",
              left: "-60px",
            }}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default SocialBannerTemplate2;
