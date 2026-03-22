import normalize from "emotion-normalize";
import { css, Global } from "@emotion/react";

function App() {
  return (
    <Global
      styles={css`
        ${normalize}
      `}
    />
  );
}

export default App;
