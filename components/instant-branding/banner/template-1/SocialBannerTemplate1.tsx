import * as React from "react";
import { cn } from "@/lib/utils";
import { CommonComponetProps } from "../../../types";
import { generateBackground } from "@/common/helper";

function SocialBannerTemplate1({
  data,
  commonConfig,
  brandConfig,
  className = "",
}: CommonComponetProps) {
  const {
    width,
    height,
    fontSize,
    buttonStyle,
    textColor,
    backgroundBackdropConfig,
    headshotBackdropConfig,
    backgroundStyle,
    contentBackgroundColor,
  } = commonConfig;
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

  const backgroundValue = generateBackground(
    backgroundStyle,
    primaryColor,
    secondaryColor
  );

  console.log("backgroundStyle", backgroundStyle);

  console.log("backgroundValue", backgroundValue);

  return (
    <div
      className={cn("relative", className)}
      style={{
        background: backgroundValue,
        backgroundBlendMode:
          backgroundStyle.type !== "solid" ? "multiply" : undefined,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {/* background backdrop */}
      <div className="absolute right-0 w-full h-full">
        <div className="w-full h-full flex justify-end items-center">
          <div
            className={cn("relative", className)}
            style={{
              width: `${width}px`,
              height: `${height}px`,
            }}
          >
            <div
              className="absolute right-0 w-full h-full"
              style={{
                backgroundImage: `url(${backgroundBackdropConfig?.backgroundBackdropUrl})`,
                backgroundSize: `${backgroundBackdropConfig?.backgroundBackdropSize}`,
                backgroundPosition: `${backgroundBackdropConfig?.backgroundBackdropPosition}`,
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </div>
      {/* headshot backdrop */}
      <div className="absolute right-0 w-full h-full">
        <div className="w-full h-full flex justify-end items-center">
          <div
            className={cn("relative", className)}
            style={{
              width: `${width}px`,
              height: `${height}px`,
            }}
          >
            <div
              className="absolute right-0 w-full h-full"
              style={{
                backgroundImage: `url(${headshotBackdropConfig?.headshotBackdropUrl})`,
                backgroundSize: `${headshotBackdropConfig?.headshotBackdropSize}`,
                backgroundPosition: `${headshotBackdropConfig?.headshotBackdropPosition}`,
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full h-full grid grid-cols-[20%_60%_20%]">
        {/* JOIN OUR COMMUNITY button at top left */}
        <div
          className={`pl-[40px] pt-[40px]`}
          style={{ fontFamily: secondaryFont }}
        >
          <div
            className={`py-[10px] px-[16px] text-[16px] inline-block`}
            style={{
              backgroundColor: secondaryColor,
              color: textColor,
              fontFamily: secondaryFont,
              borderRadius: buttonStyle === "rounded" ? "6px" : "0px",
              maxWidth: "375px",
              wordBreak: "break-word",
              hyphens: "auto",
            }}
          >
            {communityButtonText}
          </div>
        </div>

        {/* Main content container with fixed width */}
        <div
          className={cn(
            contentBackgroundColor === "true"
              ? `justify-items-center-safe h-[263px] w-[901px] my-auto p-[32px] rounded-2xl`
              : "justify-center h-[263px] w-[901px] my-auto p-[32px]"
          )}
          style={{
            backgroundColor:
              contentBackgroundColor === "true"
                ? secondaryColor
                : "transparent",
          }}
        >
          <div
            className={cn(
              heading
                ? "justify-center h-[199.15px] w-[837px] grid grid-cols-[60%_40%] gap-[32px]"
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
                    backgroundColor: secondaryColor,
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
        </div>

        {/* Right side - Headshot with light effect */}
        <div className="relative h-full overflow-hidden rounded-lg">
          {/* Headshot image */}
          {imageUrl && (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default SocialBannerTemplate1;
