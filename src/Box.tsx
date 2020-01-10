import React from "react";
import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";

interface IBoxProps {
  /**
   * A documented prop
   */
  documentThis?: string;

  /** @ignore */
  className?: string;

  /**
   *
   */
  children: React.ReactNode;
}

const UnstyledBox = (props: IBoxProps) => (
  <div className={props.className}>{props.children}</div>
);

const StyledBox = styled(UnstyledBox)({
  padding: 20,
  border: `solid 2px black`
});

export default observer((props: IBoxProps) => <StyledBox {...props} />);
