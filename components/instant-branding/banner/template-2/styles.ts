import { CommonConfig, Data } from "../../../types/index";

export type StyleItem = {
  template_key: number;
  data: Data;
  commonConfig: CommonConfig;
};

export const styles: StyleItem[] = [
  {
    template_key: 1,
    data: {
      heading: "Build a Memorable Personal Brand, Without Hiring a Team",
      description:
        "Your all-in-one personal brand OS — from strategy to content, made simple.",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/707e/c151/75eeca732fe81415fc6105b91f38697f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SrN5DdIFFqvCpiAvAqXW85YS0W6yCIPBySsFyUAZFftWH~BRfVTfq6Wn3HE5sHPc6I6P4Ctrq4-M87sKBKVaqZvl2xTirExbOtormQ4QMNcVxwXyHWr2eH7JDeCe3Rz0BPZkrXbxQqkIUy86mJJ5h7YYr-zeTGE6ao7BtcoC8P1qGjg4XbXR8YsifZIMn4pnYpaYoSi1wNOBolik4z~VMc6My2OKYqlJSq28KhqL4NVTXs79Wc5Shu6LCQ09BzU02U3iGP8nMvvOisqhsjeUnkwbR~8vDliij6CkAB1TKLLDFRWNBvrBASMbgH38cYtMRu-7aHyQJLgW1d20yHpr4Q__", // Replace with your actual image
      imageAlt: "Professional headshot",
      buttonText: "Get Started",
      communityButtonText: "JOIN OUR COMMUNITY",
      ctaButtonText: "Start Free Trial",
    },
    commonConfig: {
      width: 1584, // Use width from useCanvasDimensions hook
      height: 396, // Use height from useCanvasDimensions hook
      fontSize: {
        heading: "48px",
        description: "32px",
        button: 20,
      },
      textColor: "white",
      backdropConfig: {
        backdropUrl: "https://i.postimg.cc/KzzbkLRB/output-onlinepngtools.png",
        backdropPosition: "right center",
        backdropSize: "contain",
        backdropColor: "#D4FBFF",
      },
    },
  },
  // {
    // template_key: 2,
    // data: {
    //   heading: "Build a Memorable Personal Brand, Without Hiring a Team",
    //   description:
    //     "Your all-in-one personal brand OS — from strategy to content, made simple.",
    //   imageUrl:
    //     "https://s3-alpha-sig.figma.com/img/707e/c151/75eeca732fe81415fc6105b91f38697f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SrN5DdIFFqvCpiAvAqXW85YS0W6yCIPBySsFyUAZFftWH~BRfVTfq6Wn3HE5sHPc6I6P4Ctrq4-M87sKBKVaqZvl2xTirExbOtormQ4QMNcVxwXyHWr2eH7JDeCe3Rz0BPZkrXbxQqkIUy86mJJ5h7YYr-zeTGE6ao7BtcoC8P1qGjg4XbXR8YsifZIMn4pnYpaYoSi1wNOBolik4z~VMc6My2OKYqlJSq28KhqL4NVTXs79Wc5Shu6LCQ09BzU02U3iGP8nMvvOisqhsjeUnkwbR~8vDliij6CkAB1TKLLDFRWNBvrBASMbgH38cYtMRu-7aHyQJLgW1d20yHpr4Q__", // Replace with your actual image
    //   imageAlt: "Professional headshot",
    //   buttonText: "Get Started",
    //   communityButtonText: "JOIN OUR COMMUNITY",
    //   ctaButtonText: "Start Free Trial",
    // },
    // commonConfig: {
    //   width: 1584, 
    //   height: 396,
    //   fontSize: {
    //     heading: "48px",
    //     description: "32px",
    //     button: 20,
    //   },
    //   textColor: "white",
    //   backdropConfig: {
    //     backdropPosition: "right center",
    //     backdropSize: "contain",
    //     backdropColor: "#f5f5f5"
      // },
    // },
  // },
];
