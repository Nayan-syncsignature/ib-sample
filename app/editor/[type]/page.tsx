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
    <div className="grid grid-cols-[25%_60%]">
      <div className="h-[100vh] overflow-auto">
        <ControlPanel type={type} />
      </div>
      <Canvas type={type} />
      {/* <TemplatePanel /> */}
    </div>
  );
};

export default Editor;
