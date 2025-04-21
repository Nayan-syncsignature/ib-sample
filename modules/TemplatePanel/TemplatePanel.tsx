"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Copy, MoreHorizontal } from "lucide-react";
import SocialBannerTemplate1 from "@/components/instant-branding/banner/template-1";
import { styles } from "@/components/instant-branding/banner/template-1/styles";
import { useBrandConfig } from "@/store/hooks/useBrandConfig";

const TemplatePanel = () => {
  const { brandConfig } = useBrandConfig();

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
      <div className="flex flex-col overflow-auto">
        {styles.map(({ template_key, commonConfig, data }) => (
          <SocialBannerTemplate1
            key={template_key}
            commonConfig={commonConfig}
            data={data}
            brandConfig={brandConfig}
            className=""
          />
        ))}
      </div>
    </div>
  );
};

export default TemplatePanel;
