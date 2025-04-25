import * as React from "react";
import { cn } from "@/lib/utils";
import { CommonComponetProps } from "../../../types";
import { generateBackground, getButtonClasses } from "@/common/helper";

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

  // Calculate scaling factors based on provided dimensions
  // Reference dimensions (LinkedIn banner) to scale from
  const refWidth = 1584;
  const refHeight = 396;

  // Calculate scale ratios
  const widthRatio = width / refWidth;
  const heightRatio = height / refHeight;
  const scaleFactor = Math.min(widthRatio, heightRatio);

  // Helper function to scale values based on template size
  const scaleValue = (value: number) => Math.round(value * scaleFactor);

  // Responsive font sizes if not explicitly provided
  const responsiveFontSizes = {
    heading: `${scaleValue(fontSize?.heading || 16)}px`,
    description: fontSize?.description || `${scaleValue(32)}px`,
    button: fontSize?.button || `${scaleValue(16)}px`,
    communitybutton: `${scaleValue(fontSize?.communitybutton || 16)}px`,
  };

  // Responsive spacing
  const spacing = {
    communityButtonTop: scaleValue(45),
    communityButtonLeft: scaleValue(45),
    communityButtonPaddingY: scaleValue(10),
    communityButtonPaddingX: scaleValue(16),
    contentPadding: scaleValue(32),
    contentGap: scaleValue(32),
    titleLineHeight: "100%",
    buttonRadius: buttonStyle?.buttonRadius,
  };

  // Calculate layout dimensions
  const contentWidth = scaleValue(901);
  const contentHeight = scaleValue(263);
  const headingWidth = scaleValue(837);
  const headingHeight = scaleValue(199);
  const titleHeight = scaleValue(130);
  const descriptionWidth = scaleValue(342);
  const descriptionHeight = scaleValue(118);

  const isFacebookCover = width === 820 && height === 312;
  const isTwitterCovers = width === 1500 && height === 500;

  // Consistent grid layout for all sizes
  const gridColumns = isFacebookCover
    ? "grid-cols-[15%_55%_30%]"
    : isTwitterCovers ? "grid-cols-[15%_55%_30%]" : "grid-cols-[20%_50%_30%]" ;

  // Generate background style
  const backgroundValue = generateBackground(
    backgroundStyle,
    primaryColor,
    secondaryColor
  );

  // Generate button styles
  const buttoncolor: string =
    buttonStyle?.buttonColor === "secondary"
      ? secondaryColor
      : buttonStyle?.buttonColor === "primary"
      ? primaryColor
      : highlightColor;
  const buttonStyles = getButtonClasses(
    buttonStyle?.buttonType || "normal",
    buttoncolor,
    highlightColor,
    buttonStyle?.buttonRadius || "0px",
  );

  return (
    <div
      className={cn("relative", className)}
      style={{
        background: backgroundValue,
        backgroundBlendMode:
          backgroundStyle.type !== "solid" ? "multiply" : undefined,
        width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden",
      }}
    >
      {/* Background backdrop */}
      <div className="absolute right-0 w-full h-full">
        <div className="w-full h-full flex justify-end items-center">
          <div
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

      {/* Headshot backdrop */}
      <div className="absolute right-0 w-full h-full">
        <div className="w-full h-full flex justify-end items-center">
          <div
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

      {/* Main content container */}
      <div
        className={`relative w-full h-full grid ${gridColumns} `}
      >
        {/* JOIN OUR COMMUNITY button */}
        <div
          className="pl-auto"
          style={{
            fontFamily: secondaryFont,
            paddingTop: `${spacing.communityButtonTop}px`,
            paddingLeft: `${spacing.communityButtonLeft}px`,
          }}
        >
          <div
            style={{
              padding: `${spacing.communityButtonPaddingY}px ${spacing.communityButtonPaddingX}px`,
              backgroundColor: secondaryColor,
              color: textColor,
              fontFamily: secondaryFont,
              fontSize: responsiveFontSizes.button,
              borderRadius: "0px",
              display: "inline-block",
              maxWidth: `${scaleValue(375)}px`,
              wordBreak: "break-word",
              hyphens: "auto",
            }}
          >
            {communityButtonText}
          </div>
        </div>

        {/* Main content */}
        <div
          className={
            contentBackgroundColor === "true" ? "p-4 rounded-2xl" : "p-4"
          }
          style={{
            height: `${contentHeight}px`,
            width: `${contentWidth}px`,
            margin: "auto",
            backgroundColor:
              contentBackgroundColor === "true"
                ? secondaryColor
                : "transparent",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            className="grid grid-cols-[60%_40%] gap-4"
            style={{
              height: `${headingHeight}px`,
              width: `${headingWidth}px`,
            }}
          >
            {/* Heading */}
            <div
              className="text-right"
              style={{
                fontSize: responsiveFontSizes.heading,
                fontFamily: secondaryFont,
                color: textColor,
                fontWeight: 600,
                lineHeight: spacing.titleLineHeight,
                letterSpacing: "-0.05em",
                height: `${titleHeight}px`,
              }}
            >
              {heading}
            </div>

            {/* Description and CTA */}
            <div
              className="flex flex-col"
              style={{
                width: `${descriptionWidth}px`,
                height: `${descriptionHeight}px`,
              }}
            >
              <div
                className="text-left"
                style={{
                  fontSize: responsiveFontSizes.description,
                  fontFamily: secondaryFont,
                  color: textColor,
                  fontWeight: "normal",
                  letterSpacing: "-0.05em",
                  lineHeight: spacing.titleLineHeight,
                }}
              >
                {description}
              </div>

              <div
                style={{
                  marginTop: 32 * heightRatio, // 'mt-8' → 32px base
                }}
              >
                <div
                  className={`text-center tracking-[-.05em] leading-[100%] p-[16px] font-semibold h-fit w-fit ${buttonStyles.className}`}
                  style={{
                    ...buttonStyles.style,
                    fontSize: responsiveFontSizes.button,
                    padding: `${16 * heightRatio}px`,
                  }}
                >
                  {ctaButtonText}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Headshot */}
        <div className="relative h-full overflow-hidden justify-items-bottom">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={imageAlt}
              className="object-cover h-full object-right-bottom justify-self-end "              
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SocialBannerTemplate1;
