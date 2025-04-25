export interface Data {
  heading?: string;
  subHeading?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  buttonText?: string;
  communityButtonText?: string;
  ctaButtonText?: string;
}

export interface CommonConfig {
  width: number;
  height: number;
  buttonStyle?: {
    buttonType: 'normal' | 'bordered' ;
    buttonColor: 'primary' | 'secondary' | 'highlight', 
    buttonTextColor: string,
    buttonRadius?: string,
  };
  fontSize?: {
    heading: number;
    description?: string;
    button?: string;
    communitybutton: number;
  };
  backgroundBackdropConfig?: {
    backgroundBackdropUrl?: string;
    backgroundBackdropPosition?: string;
    backgroundBackdropSize?: string;
    backgroundBackdropColor?: string;
  };
  headshotBackdropConfig?: {
    headshotBackdropUrl?: string;
    headshotBackdropPosition?: string;
    headshotBackdropSize?: string;
    headshotBackdropColor?: string;
  };
  contentBackgroundColor?: string;
  backgroundStyle: {
    type: "solid" | "radial" | "linear";
    config?: any;
  };
  textColor?: string;
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
