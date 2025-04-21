"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

export interface SocialBannerProps {
  id: number;
  title: string;
  description: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  logoPosition: "left" | "center" | "right";
  textPosition: "left" | "center" | "right";
  textColor: string;
  logoUrl?: string;
  selected?: boolean;
  onClick?: () => void;
}

const SocialBanner = ({
  title,
  description,
  gradientFrom,
  gradientVia,
  gradientTo,
  logoPosition,
  textPosition,
  textColor,
  logoUrl,
  selected,
  onClick,
}: SocialBannerProps) => {
  // Calculate positioning classes based on props
  const logoPositionClass = {
    left: "justify-start ml-6",
    center: "justify-center",
    right: "justify-end mr-6",
  }[logoPosition];

  const textPositionClass = {
    left: "text-left ml-6",
    center: "text-center",
    right: "text-right mr-6",
  }[textPosition];

  return (
    <div
      className={`relative cursor-pointer transition-all duration-200 ${
        selected ? "ring-2 ring-white rounded-xl" : ""
      }`}
      onClick={onClick}
    >
      <Card
        className="p-4 rounded-xl h-40 overflow-hidden relative !bg-gray-300"
        style={{
          background: `linear-gradient(to bottom right, var(--${gradientFrom}), var(--${gradientVia}), var(--${gradientTo}))`,
        }}
      >
        {/* LinkedIn Banner Content */}
        <div className="flex flex-col h-full justify-between">
          {/* Logo Area */}
          <div className={`flex ${logoPositionClass} h-12 mb-2`}>
            {logoUrl && (
              <div className="h-10 w-10 bg-white/90 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={logoUrl || "/placeholder.svg"}
                  alt="Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className={`${textPositionClass} ${textColor}`}>
            <h3 className="font-bold text-lg truncate">{title}</h3>
            <p className="text-sm opacity-90 truncate">{description}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SocialBanner;
