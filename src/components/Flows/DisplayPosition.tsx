import { positionDisplayContainer } from "./styles/index.css.ts";

interface IDisplayPositionProps {
  x: number;
  y: number;
  zoom?: number;
}

export const DisplayPosition = ({ x, y, zoom }: IDisplayPositionProps) => {
  return (
    <div className={positionDisplayContainer}>
      <div>X: {x}</div>
      <div>Y: {y}</div>
      <div>Zoom: {zoom}</div>
    </div>
  );
};
