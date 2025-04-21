"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { templateMap } from "./utils/template-map";
import { CommonComponetProps } from "@/components/types";
import { styles } from "@/components/instant-branding/banner/template-1/styles";
import { useBrandConfig } from "@/store/hooks/useBrandConfig";

// Dummy data for different asset types
const assetTypes = [
  {
    id: "social-banner",
    title: "Social Banner",
    description: "Custom header images for social media profiles",
    icon: "🖼️",
    examples: 4,
  },
  {
    id: "social-post",
    title: "Social Post",
    description: "Engaging content for your social media feeds",
    icon: "📱",
    examples: 6,
  },
  {
    id: "carousel",
    title: "Carousel",
    description: "Multiple slides in a single post",
    icon: "🔄",
    examples: 5,
    proPlan: true,
  },
];

interface assestMapType {
  readonly key: string;
  readonly name: string;
}

const assestMap: ReadonlyArray<assestMapType> = [
  {
    key: "social-banner",
    name: "social-banner-template-1",
  },
  {
    key: "social-banner",
    name: "social-banner-template-2",
  },
];

const SelectType = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const router = useRouter();

  const { brandConfig } = useBrandConfig();

  const handleContinue = () => {
    if (selectedType) {
      router.push(`/editor/${selectedType}/`);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Select Content Type</h1>
        <p className="text-gray-500">
          Choose the type of content you want to create
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assetTypes.map((type) => (
          <Card
            key={type.id}
            className={`cursor-pointer overflow-hidden transition-all hover:shadow-lg ${
              selectedType === type.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setSelectedType(type.id)}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl">{type.icon}</div>
                {type.proPlan && (
                  <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
                    Pro Plan
                  </Badge>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{type.title}</h3>
              <p className="text-gray-500 mb-4">{type.description}</p>
              <div className="text-sm text-gray-400">
                {type.examples} templates available
              </div>
            </div>
          </Card>
        ))}
      </div>

      {assestMap
        .filter(({ key }) => key === selectedType)
        .map(({ name }) => {
          const Component = templateMap[name];

          return (
            <div className="scale-75 bg-black">
              <Component
                key={name}
                data={styles[0].data}
                commonConfig={styles[0].commonConfig}
                brandConfig={brandConfig}
              />
            </div>
          );
        })}

      <div className="mt-8 text-center">
        <Button
          size="lg"
          disabled={!selectedType}
          className="px-8"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SelectType;
