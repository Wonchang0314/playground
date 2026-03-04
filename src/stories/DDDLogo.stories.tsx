import { DDDLogo } from "../components/dddLogo";

export default {
  title: "DDDLogo",
  component: DDDLogo,
};

export const Default = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <DDDLogo />
    </div>
  );
};
