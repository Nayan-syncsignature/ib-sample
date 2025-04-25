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

  const backgroundValue = generateBackground(
    backgroundStyle,
    primaryColor,
    secondaryColor
  );

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
    heading: `${scaleValue(48)}px`,
    description: `${scaleValue(32)}px`,
    button: `${scaleValue(24.63)}px`,
    communitybutton: `${scaleValue(16)}px`,
  };

  // Responsive spacing
  const spacing = {
    communityButtonTop: scaleValue(45),
    communityButtonLeft: scaleValue(45),
    communityButtonPaddingY: scaleValue(16),
    communityButtonPaddingX: scaleValue(16),
    contentPadding: scaleValue(32),
    contentGap: scaleValue(32),
    titleLineHeight: "100%",
    buttonRadius: buttonStyle?.buttonRadius,
    ctaButtonTextPadding: scaleValue(16),
  };

  // Calculate layout dimensions
  const contentDivWidth = scaleValue(901);
  const contentDivHeight = scaleValue(263);
  const contentSubDivWidth = scaleValue(841);
  const contentSubDivHeight = scaleValue(199.27);
  const headingHeight = scaleValue(130);
  const headingWidth = scaleValue(470);
  const descriptionWidth = scaleValue(342);
  const descriptionHeight = scaleValue(118);

  const headshotHeight = scaleValue(486);


  const isFacebookCover = width === 820 && height === 360;
  const isTwitterCovers = width === 1500 && height === 500;

  // Consistent grid layout for all sizes
  const gridColumns = isFacebookCover
    ? "grid-cols-[10%_50%_40%]"
    : isTwitterCovers
    ? "grid-cols-[20%_50%_30%]"
    : "grid-cols-[20%_50%_30%]";

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
    buttonStyle?.buttonRadius || "0px"
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
      <div 
        className={`relative grid ${gridColumns}`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        >
        {/* JOIN OUR COMMUNITY button at top left */}
        <div
          style={{
            fontFamily: secondaryFont,
            paddingTop: `${spacing.communityButtonTop}px`,
            paddingLeft: `${spacing.communityButtonLeft}px`,
          }}
        >
          <div
            className={`inline-block`}
            style={{
              padding: `${spacing.communityButtonPaddingY}px ${spacing.communityButtonPaddingX}px`,
              fontSize: `${responsiveFontSizes?.communitybutton}`,
              backgroundColor: secondaryColor,
              color: textColor,
              fontFamily: secondaryFont,
              maxWidth: `${scaleValue(375)}px`,
              wordBreak: "break-word",
              hyphens: "auto",
              borderRadius: "0px",
              display: "inline-block",
            }}
          >
            {communityButtonText}
          </div>
        </div>

        {/* Main content container with fixed width */}
        <div
          className={
            contentBackgroundColor === "true" ? "p-4 rounded-2xl" : "p-4"
          }
          style={{
            height: `${contentDivHeight}px`,
            width: `${contentDivWidth}px`,
            margin: "auto",
            backgroundColor:
              contentBackgroundColor === "true"
                ? secondaryColor
                : "transparent",
            justifyContent: "center",
          }}
        >
          <div
            className="grid grid-cols-[60%_40%]"
            style={{
              height: `${contentSubDivHeight}px`,
              width: `${contentSubDivWidth}px`,
            }}
          >
            {/* Left content area - titles */}
            <div
              className="text-right"
              style={{
                fontSize: responsiveFontSizes.heading,
                fontFamily: primaryFont,
                color: textColor,
                fontWeight: 600,
                lineHeight: spacing.titleLineHeight,
                letterSpacing: "-0.05em",
                height: `${headingHeight}px`,
                width: `${headingWidth}px`
              }}
            >
              {heading}
            </div>

            {/* Right content area - sub-titles */}
            <div
              className="flex flex-col"
              style={{
                width: `${descriptionWidth}px`,
                height: `${descriptionHeight}px`,
                gap: `${spacing?.contentPadding}px`,
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
              <div className="flex items-end">
                <div
                  className={`text-center tracking-[-.05em] leading-[100%] font-semibold h-fit w-fit`}
                  style={{
                    ...buttonStyles.style,
                    fontSize: responsiveFontSizes.button,
                    fontFamily: secondaryFont,
                    padding: `${16 * heightRatio}px`,
                  }}
                >
                  {ctaButtonText}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Headshot with light effect */}
        <div className="relative overflow-hidden rounded-lg "
        style= {{
          height: `${headshotHeight}`,
          alignContent: 'end',
        }}>
          {/* Headshot image */}
          {imageUrl && (
            <img
              src={imageUrl}
              alt={imageAlt}
              className="object-cover object-left w-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SocialBannerTemplate1;
