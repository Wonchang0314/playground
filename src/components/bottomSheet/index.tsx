import { motion, useMotionValue, useSpring, type PanInfo } from "framer-motion";
import { Minus } from "lucide-react";
import { container, content, gripContainer } from "./style.css";
import { Backdrop } from "./Backdrop";
import { useEffect, useState } from "react";

interface IBottomSheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const initialHeight = 300;
const minHeight = 200;

export const BottomSheet = ({ open, onClose, children }: IBottomSheetProps) => {
  const [maxHeight, setMaxHeight] = useState(600);
  const [snapPoints, setSnapPoints] = useState({
    closed: 0,
    half: 400,
    expanded: 600,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== "undefined") {
        const viewportHeight = window.innerHeight;
        setMaxHeight(viewportHeight * 0.9);
        setSnapPoints({
          closed: 0,
          half: viewportHeight * 0.5,
          expanded: viewportHeight * 0.8,
        });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const height = useMotionValue(0);
  const springHeight = useSpring(height, {
    stiffness: 400,
    damping: 40,
  });

  const y = useMotionValue(0);
  const springY = useSpring(y, {
    stiffness: 400,
    damping: 40,
  });

  useEffect(() => {
    if (open) {
      height.set(initialHeight);
      y.set(0);
    } else {
      height.set(0);
      y.set(typeof window !== "undefined" ? window.innerHeight : 0);
    }
  }, [open, height, y]);

  const handleDragEnd = (info: PanInfo) => {
    const currentHeight = height.get();
    const offset = Math.abs(info.offset.y);
    console.log(info.velocity.y);
    if (info.velocity.y > 1000 || offset < window.innerHeight * 0.1) {
      onClose();
      return;
    }

    // 현재 높이에서 가장 가까운 스냅포인트 찾기
    const distances = {
      closed: Math.abs(currentHeight - snapPoints.closed),
      half: Math.abs(currentHeight - snapPoints.half),
      expanded: Math.abs(currentHeight - snapPoints.expanded),
    };

    // 가장 가까운 스냅포인트로 이동
    const closestSnapPoint = Object.entries(distances).reduce((a, b) =>
      a[1] < b[1] ? a : b
    )[0] as keyof typeof snapPoints;

    height.set(snapPoints[closestSnapPoint]);
    y.set(0);
  };

  return (
    <>
      <Backdrop open={open} onClose={onClose} />
      <motion.aside
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0}
        style={{
          y: springY,
          height: springHeight,
        }}
        onDrag={(_, info) => {
          const deltaY = -info.offset.y; // 위로 드래그하면 양수
          const newHeight = Math.max(
            minHeight,
            Math.min(maxHeight, initialHeight + deltaY)
          );
          height.set(newHeight);
        }}
        onDragEnd={(_, info) => handleDragEnd(info)}
        className={container}
        role="dialog"
      >
        <div className={gripContainer}>
          <Minus size={32} color="gray" />
        </div>
        <div className={content}>{children}</div>
      </motion.aside>
    </>
  );
};
