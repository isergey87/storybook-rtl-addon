import { addons } from "@storybook/manager-api";
import { ADDON_ID, TOOL_ID } from "./constants";
import { Tool } from "./Tool";
import { Addon_TypesEnum } from "@storybook/types";

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    type: Addon_TypesEnum.TOOL,
    title: "Html direction addon",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool
  });
});
