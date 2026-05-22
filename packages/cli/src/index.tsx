import { createCliRenderer, TextAttributes } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { Header } from "./components/header";
import { InputBar } from "./components/input-bar";

function App() {
  return (
    <box alignItems="center" justifyContent="center" flexGrow={1}>
      <Header/>
      <InputBar onSubmit={()=>{}}/>
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
