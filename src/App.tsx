import { playgroundContainer } from "./components/Flows/styles/index.css.ts";
//import { FlowPlayGround } from "./components/Flows/Flow.tsx";

import { BottomSheet } from "./components/bottomSheet/index.tsx";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className={playgroundContainer}>
      {/* <FlowPlayGround /> */}
      <button onClick={() => setOpen(!open)}>바텀시트 열기</button>
      <BottomSheet open={open} onClose={() => setOpen(false)}>
        <div>바텀시트</div>
      </BottomSheet>
    </div>
  );
}

export default App;
