import { Button } from "@/components/ui/button";
import { useBrandConfig } from "@/lib/redux/hooks/useBrandConfig";
import useCanvasDimensions from "@/lib/redux/hooks/useCanvasDimensions";
import { Image } from "lucide-react";
import React from "react";

const SocialBanner = () => {
  const { width, height } = useCanvasDimensions();
  const { primaryColor } = useBrandConfig();

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "#2A9D8F",
      }}
    >
      <div className="h-full w-full grid grid-cols-[20%_55%_25%]">
        {/* JOIN OUR COMMUNITY button at top left */}
        <div className="font-sans pl-[40px] pt-[40px]">
          <Button className="w-[231px] h-[44px] text-[16px] py-[10px] px-[16px] rounded-none">
            JOIN OUR COMMUNITY
          </Button>
        </div>

        {/* Main content container with fixed width */}
        <div className="justify-center h-[195.15px] w-[837px] my-auto grid grid-cols-[60%_40%] gap-[32px]">
          {/* Left content area - titles*/}
          <div className="h-[130px] tracking-[-.05em] font-dm leading-[100%] font-semibold text-[48px] text-white text-right">
            Build a Memorable Personal Brand, Without Hiring a Team
          </div>
          {/* Right content area - sub-titles*/}

          <div className=" grid grid-rows-[70%_30%] ">
            <div className="align-left text-[32px] font-dm tracking-[-.05em] leading-[100%] font-normal text-white">
              Your all-in-one personal brand OS — from <br />
              strategy to content, <br />
              made simple.
            </div>
            <div className="flex items-end">
              <Button className="bg-[#1A2E2A] text-white rounded-none p-[14.08px] tracking-[-.05em] leading-[100%] text-[24.63px] font-dm font-semibold h-[45.15px] w-[184.15px]">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>

        {/* Right side - Headshot with light effect */}
        <div>
          <div className="h-[396px] w-[389px] overflow-hidden rounded-lg">
            {/* Light effect behind headshot */}
            <div style={{
                backgroundImage: "",
              }}>

            {/* Headshot image */}
            <img
              src="https://s3-alpha-sig.figma.com/img/707e/c151/75eeca732fe81415fc6105b91f38697f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SrN5DdIFFqvCpiAvAqXW85YS0W6yCIPBySsFyUAZFftWH~BRfVTfq6Wn3HE5sHPc6I6P4Ctrq4-M87sKBKVaqZvl2xTirExbOtormQ4QMNcVxwXyHWr2eH7JDeCe3Rz0BPZkrXbxQqkIUy86mJJ5h7YYr-zeTGE6ao7BtcoC8P1qGjg4XbXR8YsifZIMn4pnYpaYoSi1wNOBolik4z~VMc6My2OKYqlJSq28KhqL4NVTXs79Wc5Shu6LCQ09BzU02U3iGP8nMvvOisqhsjeUnkwbR~8vDliij6CkAB1TKLLDFRWNBvrBASMbgH38cYtMRu-7aHyQJLgW1d20yHpr4Q__"
              alt="Professional with glasses"
              className="object-cover"
              style={{
                height: "465px",
                width: "389px",
              }}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialBanner;
