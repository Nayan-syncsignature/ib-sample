"use client";

import React from "react";
import { useParams } from "next/navigation";
import Canvas from "@/modules/Canvas";
import { componentMap, ComponentType } from "@/utils/component-mapper";
import ControlPanel from "@/modules/ControlPanel";
import TemplatePanel from "@/modules/TemplatePanel";

const Editor = () => {
  const params = useParams();
  const type = params.type as string;

  const isValidType = (type: string): type is ComponentType => {
    return type in componentMap;
  };

  if (!isValidType(type)) {
    return <div>Editor type "{type}" not found.</div>;
  }

  return (
    <div className="h-[100vh] grid grid-cols-[25%_60%_15%]">
      <div className="overflow-auto">
        <ControlPanel type={type} />
      </div>
      <div className="w-full flex items-center justify-center bg-sidebar-accent">
        <Canvas type={type} />
      </div>
      <div>
        <TemplatePanel />
      </div>
    </div>
  );
};

export default Editor;
