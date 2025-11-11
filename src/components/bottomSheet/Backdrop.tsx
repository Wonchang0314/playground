import { backdropContainer } from "./style.css";

interface IBackdropProps {
  open: boolean;
  onClose: () => void;
  backdrop?: boolean;
}
export const Backdrop = ({
  open,
  onClose,
  backdrop = true,
}: IBackdropProps) => {
  if (!backdrop || !open) return null;
  return (
    <div className={backdropContainer} onClick={onClose} aria-hidden="true" />
  );
};
