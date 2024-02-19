import type { PartialStoryFn as StoryFunction, Renderer, StoryContext } from "@storybook/types";
import { useEffect, useGlobals, useMemo } from "@storybook/preview-api";
import { HTMLDirection, PARAM_KEY } from "./constants";

export const withGlobals = (
  StoryFn: StoryFunction<Renderer>,
  context: StoryContext<Renderer>
) => {
  const [globals] = useGlobals();
  const htmlDirection: HTMLDirection = useMemo(() => globals?.[PARAM_KEY] || "ltr", [globals]);

  useEffect(() => {
    document.documentElement.setAttribute("dir", htmlDirection);
  }, [htmlDirection]);
  return StoryFn();
};