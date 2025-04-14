"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Copy, MoreHorizontal } from "lucide-react";
import { linkedInBannerTemplates } from "./banner-data";
import SocialBanner from "./SocialBanner";

const TemplatePanel = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(3);

  const templates = [
    { id: 1, angle: 0 },
    { id: 2, angle: 15 },
    { id: 3, angle: 30 },
    { id: 4, angle: 45 },
    { id: 5, angle: 60 },
  ];

  return (
    <div className="flex flex-col h-screen bg-zinc-950 p-4">
      {/* Export Header */}
      <div className="bg-zinc-900 rounded-full mb-4 p-1 px-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <ArrowDown className="h-4 w-4 text-zinc-300" />
          <span className="text-sm font-medium text-zinc-300">Export</span>
          <span className="text-xs text-zinc-500 ml-1">1x · PNG</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
            <Copy className="h-3 w-3 text-zinc-400" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
            <MoreHorizontal className="h-3 w-3 text-zinc-400" />
          </Button>
        </div>
      </div>

      {/* Template Cards */}
      <div className="flex flex-col gap-4 overflow-auto">
        {linkedInBannerTemplates.map((banner) => (
          <SocialBanner
            key={banner.id}
            {...banner}
            selected={selectedTemplate === banner.id}
            onClick={() => setSelectedTemplate(banner.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplatePanel;
