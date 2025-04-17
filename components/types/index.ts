export interface Data {
  heading?: TrustedHTML;
  subHeading?: TrustedHTML;
  description?: TrustedHTML;
  imageUrl?: string;
  imageAlt?: string;
  buttonText?: string;
  communityButtonText?: string;
  ctaButtonText?: string;
}

export interface CommonConfig {
  width: number;
  height: number;
  buttonStyle?: "rounded" | "square";
  fontSize?: {
    heading?: string;
    description?: string;
    ctaButton?: string;
    communityButton?: string;
  };
  backdropConfig?: {
    backdropUrl?: string;
    backdropPosition?: string;
  };
  textColor?: string;
  fontFamily?: string;
  highlightColor?: string;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderlined?: boolean;
  textContent?: string;
}

// Match the existing BrandConfigState interface
export interface BrandConfig {
  primaryColor: string;
  secondaryColor: string;
  highlightColor: string;
  primaryFont: string;
  secondaryFont: string;
  highlightFont: string;
}

export interface CommonComponetProps {
  data: Data;
  commonConfig: CommonConfig;
  brandConfig: BrandConfig;
  className?: string;
}
