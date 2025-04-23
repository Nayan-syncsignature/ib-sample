import { CommonConfig, Data } from "./../../../types/index";

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
      backgroundBackdropConfig: {
        backgroundBackdropUrl: "https://i.postimg.cc/WbJNvqnF/img.png",
        backgroundBackdropPosition: "right center",
        backgroundBackdropSize: "contain",
      },
      backgroundStyle: {
        type: "solid",
      },
      contentBackgroundColor: "false",
    },
  },
  {
    template_key: 2,
    data: {
      heading: "",
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
      width: 1584,
      height: 396,
      fontSize: {
        heading: "48px",
        description: "32px",
        button: 20,
      },
      textColor: "white",
      backgroundBackdropConfig: {
        backgroundBackdropUrl: "https://i.postimg.cc/fb3CkLwy/Ellipse-34.png",
        backgroundBackdropPosition: "right bottom",
        backgroundBackdropSize: "",
      },
      backgroundStyle: {
        type: "solid",
      },
      contentBackgroundColor: "false",
    },
  },
  {
    template_key: 3,
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
      backgroundBackdropConfig: {
        backgroundBackdropUrl: "https://i.postimg.cc/7Zxwwdrt/Rectangle-48.png",
        backgroundBackdropPosition: "right bottom",
        backgroundBackdropSize: "",
      },
      backgroundStyle: {
        type: "solid",
      },
      contentBackgroundColor: "false",
    },
  },
  {
    template_key: 4,
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
      backgroundBackdropConfig: {
        backgroundBackdropUrl: "",
        backgroundBackdropPosition: "",
        backgroundBackdropSize: "",
      },
      headshotBackdropConfig: {
        headshotBackdropUrl: "https://i.postimg.cc/2yK1JrBL/Vector-1.png",
        headshotBackdropPosition: "left bottom",
        headshotBackdropSize: "contain",
      },
      backgroundStyle: {
        type: "solid",
      },
      contentBackgroundColor: "false",
    },
  },
  {
    template_key: 5,
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
      backgroundBackdropConfig: {
        backgroundBackdropUrl:
          "https://i.postimg.cc/nrJP887T/Group-1000006771.png",
        backgroundBackdropPosition: "left top",
        backgroundBackdropSize: "contain",
      },
      headshotBackdropConfig: {
        headshotBackdropUrl: "https://i.postimg.cc/4dKy9j0J/Rectangle-48.png",
        headshotBackdropPosition: "right bottom",
        headshotBackdropSize: "",
      },

      backgroundStyle: {
        type: "solid",
      },
      contentBackgroundColor: "false",
    },
  },
  {
    template_key: 6,
    data: {
      heading: "Build a Memorable Personal Brand, Without Hiring a Team",
      description:
        "Your all-in-one personal brand OS — from strategy to content, made simple.",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/707e/c151/75eeca732fe81415fc6105b91f38697f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SrN5DdIFFqvCpiAvAqXW85YS0W6yCIPBySsFyUAZFftWH~BRfVTfq6Wn3HE5sHPc6I6P4Ctrq4-M87sKBKVaqZvl2xTirExbOtormQ4QMNcVxwXyHWr2eH7JDeCe3Rz0BPZkrXbxQqkIUy86mJJ5h7YYr-zeTGE6ao7BtcoC8P1qGjg4XbXR8YsifZIMn4pnYpaYoSi1wNOBolik4z~VMc6My2OKYqlJSq28KhqL4NVTXs79Wc5Shu6LCQ09BzU02U3iGP8nMvvOisqhsjeUnkwbR~8vDliij6CkAB1TKLLDFRWNBvrBASMbgH38cYtMRu-7aHyQJLgW1d20yHpr4Q__", // Replace with your actual image
      imageAlt: "Professional headshot",
      buttonText: "Get Started",
      communityButtonText:
        "BOOK YOUR CONSULTATION CALL NOW. CLICK THE LINK IN BIO.",
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
      backgroundBackdropConfig: {
        backgroundBackdropUrl: "",
        backgroundBackdropPosition: "",
        backgroundBackdropSize: "",
      },
      headshotBackdropConfig: {
        headshotBackdropUrl: "https://i.postimg.cc/dVHJj4rD/Vector.png",
        headshotBackdropPosition: "right bottom",
        headshotBackdropSize: "",
      },
      backgroundStyle: {
        type: "solid",
      },
      contentBackgroundColor: "false",
    },
  },
  {
    template_key: 7,
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
      backgroundBackdropConfig: {
        backgroundBackdropUrl: "",
        backgroundBackdropPosition: "",
        backgroundBackdropSize: "",
      },
      headshotBackdropConfig: {
        headshotBackdropUrl: "https://i.postimg.cc/fb3CkLwy/Ellipse-34.png",
        headshotBackdropPosition: "right bottom",
        headshotBackdropSize: "",
      },
      backgroundStyle: {
        type: "radial",
        config: {
          circles: [
            { position: "top right", size: "600px", opacity: "2%" },
            { position: "bottom left", size: "600px", opacity: "2%" },
          ],
        },
      },
      contentBackgroundColor: "false",
    },
  },
  {
    template_key: 8,
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
      backgroundBackdropConfig: {
        backgroundBackdropUrl: "",
        backgroundBackdropPosition: "",
        backgroundBackdropSize: "",
      },
      backgroundStyle: {
        type: "linear",
        config: {
          direction: "to left",
          stops: [
            { position: "0%", opacity: "100%" },
            { position: "70%", opacity: "100%" },
          ],
        },
      },
      contentBackgroundColor: "false",
    },
  },
  {
    template_key: 9,
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
      backgroundBackdropConfig: {
        backgroundBackdropUrl: "",
        backgroundBackdropPosition: "",
        backgroundBackdropSize: "",
      },
      backgroundStyle: {
        type: "radial",
        config: {
          circles: [{ position: "bottom left", size: "600px", opacity: "2%" }],
        },
      },
      contentBackgroundColor: "false",
    },
  },
  {
    template_key: 10,
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
      backgroundBackdropConfig: {
        backgroundBackdropUrl: "",
        backgroundBackdropPosition: "",
        backgroundBackdropSize: "",
      },
      backgroundStyle: {
        type: "radial",
        config: {
          circles: [{ position: "top right", size: "600px", opacity: "2%" }],
        },
      },
      contentBackgroundColor: "false",
    },
  },
  {
    template_key: 11,
    data: {
      heading: "Build a Memorable Personal Brand, Without Hiring a Team",
      description:
        "Your all-in-one personal brand OS — from strategy to content, made simple.",
      imageUrl: "",
      imageAlt: "",
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
      backgroundBackdropConfig: {
        backgroundBackdropUrl: "",
        backgroundBackdropPosition: "",
        backgroundBackdropSize: "",
      },
      backgroundStyle: {
        type: "solid",
      },
      contentBackgroundColor: "true",
    },
  },
  {
    template_key: 11,
    data: {
      heading: "Build a Memorable Personal Brand, Without Hiring a Team",
      description:
        "Your all-in-one personal brand OS — from strategy to content, made simple.",
      imageUrl: "",
      imageAlt: "",
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
      backgroundBackdropConfig: {
        backgroundBackdropUrl:
          "https://i.postimg.cc/X77p3rVS/Group-1000006773.png",
        backgroundBackdropPosition: "top left",
        backgroundBackdropSize: "contain",
      },
      backgroundStyle: {
        type: "solid",
      },
      contentBackgroundColor: "false",
    },
  },
];
