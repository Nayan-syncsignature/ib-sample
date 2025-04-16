import { componentMap, ComponentType } from "@/utils/component-mapper";
import React, { Suspense } from "react";

export type CanvasProps = {
  type: ComponentType;
};

const Canvas = ({ type }: CanvasProps) => {
  const Component = componentMap[type];

  return (
    <Suspense fallback={<div>Loading editor...</div>}>
      <Component />
    </Suspense>
  );
};

export default Canvas;
