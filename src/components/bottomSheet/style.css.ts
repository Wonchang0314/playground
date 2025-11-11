import { style } from "@vanilla-extract/css";

export const container = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 999,
  backgroundColor: "white",
  borderRadius: "30px 30px 0 0",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
  cursor: "grab",
});

export const content = style({
  padding: "20px",
  position: "relative",
  width: "100%",
  height: "100%",
  backgroundColor: "white",
});

export const backdropContainer = style({
  position: "fixed",
  top: 10,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 998,
});

export const closeButton = style({
  position: "absolute",
  top: 0,
  right: 0,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  zIndex: 1000,
  padding: 0,
  margin: 0,
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const gripContainer = style({
  display: "flex",
  justifyContent: "center",
});
