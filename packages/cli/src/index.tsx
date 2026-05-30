import { createCliRenderer, TextAttributes } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { Header } from "./components/header";
import { InputBar } from "./components/input-bar";
import { ToastProvider } from "./providers/toast";
import { KeyboardLayerProvider } from "./providers/keyboard-layer";

function App() {
  return (
    <KeyboardLayerProvider>
    <ToastProvider>
      <box alignItems="center" justifyContent="center" flexGrow={1}>
        <Header />
        <InputBar onSubmit={() => {}} />
      </box>
    </ToastProvider>
    </KeyboardLayerProvider>
  );
}

const renderer = await createCliRenderer({
  targetFps: 60,
  exitOnCtrlC: false,
});
createRoot(renderer).render(<App />);
