import { style } from "@vanilla-extract/css";

export const playgroundContainer = style({
  width: "screen",
  height: "calc(100dvh - 20px)",
  border: "1px solid #ccc",
  position: "relative",
});

export const positionDisplayContainer = style({
  position: "absolute",
  bottom: 0,
  left: 0,
  backgroundColor: "white",
  padding: 10,
  borderRadius: 5,
  border: "1px solid #ccc",
  zIndex: 1000,
});
