import { css } from "@emotion/react";
import type { JSX } from "react";

type Props = JSX.IntrinsicElements["table"] & {
  columns: string[];
};

const Table = ({ columns, children, ...rest }: Props) => {
  return (
    <table
      {...rest}
      css={css`
        border-collapse: collapse;
        width: 100%;
      `}
    ></table>
  );
};

export default Table;
