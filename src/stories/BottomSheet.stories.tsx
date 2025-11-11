import { useState } from "react";
import { BottomSheet } from "../components/bottomSheet";

export default {
  title: "BottomSheet",
  component: BottomSheet,
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)}>Open</button>
      <BottomSheet open={open} onClose={() => setOpen(false)}>
        <div>바텀시트</div>
      </BottomSheet>
    </>
  );
};
