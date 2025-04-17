import { componentMap, ComponentType } from "@/utils/component-mapper";
import React, { Suspense } from "react";
import { useBrandConfig } from "@/store/hooks/useBrandConfig";
import { useCommonConfig } from "@/store/hooks/useCommonConfig";
import { useDataConfig } from "@/store/hooks/useDataConfig";

export type CanvasProps = {
  type: ComponentType;
};

const Canvas = ({ type }: CanvasProps) => {
  const Component = componentMap[type];
  const { commonConfig } = useCommonConfig();
  const { brandConfig } = useBrandConfig();
  const { data } = useDataConfig();

  return (
    <Suspense fallback={<div>Loading editor...</div>}>
      <Component
        data={data}
        commonConfig={commonConfig}
        brandConfig={brandConfig}
      />
    </Suspense>
  );
};

export default Canvas;
