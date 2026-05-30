import { cyan, TextAttributes } from "@opentui/core";
import { useTheme } from "../providers/theme";
// import { usePromptConfig } from "../providers/prompt-config";
// import { Mode } from "@nightcode/shared";

export function StatusBar() {
//   const { mode, model } = usePromptConfig();
  const { colors } = useTheme();

  return (
    <box flexDirection="row" gap={1}>
      
      <text fg={colors.primary}>
        {/* {mode === Mode.PLAN ? "Plan" : "Build"} */}
        Build
      </text>

      <text attributes={TextAttributes.DIM} fg={colors.dimSeparator}>
        ›
      </text>
      <text>Opus-2.6</text>
    </box>
  );
};