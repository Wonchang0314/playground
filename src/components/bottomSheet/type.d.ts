export interface IBottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialHeight?: number;
  closedHeight?: number;

  backdrop?: boolean;

  children: React.ReactNode;
}

export interface IBottomSheetLocalStates {
  isDragging: boolean;
  startY: number;
  y: number;
}
