import styles from "./DDDLogo.module.css";

export const DDDLogo = () => {
  return (
    <div className={styles.relative}>
      <div className={styles.spreadFirst}>
        <D
          className={`${styles.dddLogo} ${styles.firstShadow}`}
          strokeColor="#909090"
        />
        <D
          className={`${styles.dddLogo} ${styles.firstD}`}
          strokeColor="#ffffff"
        />
      </div>

      <div className={styles.spreadSecond}>
        <D
          className={`${styles.dddLogo} ${styles.secondShadow}`}
          strokeColor="#909090"
        />
        <D
          className={`${styles.dddLogo} ${styles.secondD}`}
          strokeColor="#ffffff"
        />
      </div>

      <div className={styles.spreadThird}>
        <D
          className={`${styles.dddLogo} ${styles.thirdShadow}`}
          strokeColor="#909090"
        />
        <D
          className={`${styles.dddLogo} ${styles.thirdD}`}
          strokeColor="#ffffff"
        />
      </div>
    </div>
  );
};

type DProps = {
  className?: string;
  strokeColor?: string;
} & React.SVGProps<SVGSVGElement>;

const D = ({ className, strokeColor = "#ffffff", ...props }: DProps) => {
  return (
    <svg
      width="128"
      height="108"
      viewBox="0 0 64 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M 12 8 L 48 8 L 48 42 L 12 42"
        stroke={strokeColor}
        strokeWidth="17"
        strokeLinecap="square"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
