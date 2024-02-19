import React, { memo, useCallback, useMemo } from "react";
import { useGlobals } from "@storybook/manager-api";
import { Button } from "@storybook/components";
import { HTMLDirection, PARAM_KEY, TOOL_ID } from "./constants";

export const Tool = memo(function MyAddonSelector() {
  const [globals, updateGlobals] = useGlobals();
  const htmlDirection: HTMLDirection = useMemo(() => globals?.[PARAM_KEY] || "ltr", [globals]);
  const inverted: HTMLDirection = useMemo(() => htmlDirection === "ltr" ? "rtl" : "ltr", [htmlDirection]);

  const toggleMyTool = useCallback(() => {
    updateGlobals({
      [PARAM_KEY]: inverted
    });
  }, [inverted]);

  return (
    <Button
      key={TOOL_ID}
      active
      title={`Toggle to ${inverted}`}
      onClick={toggleMyTool}
    >
      {htmlDirection.toUpperCase()}
    </Button>
  );
});
