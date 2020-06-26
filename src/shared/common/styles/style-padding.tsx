import { StyleObject, styled } from "onefx/lib/styletron-react";
import React from "react";

import { Flex } from "../flex";
import { media } from "./style-media";

export const wideContentPadding = {
  paddingLeft: "16px",
  paddingRight: "16px"
};

export const contentPadding = {
  width: "100%",
  [media.palm]: wideContentPadding,
  paddingLeft: "6.6vw",
  paddingRight: "6.6vw",
  [media.deskWide]: {
    paddingLeft: "16vw",
    paddingRight: "16vw"
  }
};

export const topBottomContentPadding = {
  paddingTop: "12px",
  paddingBottom: "12px"
};

const Pd = styled("div", contentPadding);

export function ContentPadding({
  children,
  style
}: {
  children?: JSX.Element | null | Array<JSX.Element>;
  style?: StyleObject;
}): JSX.Element {
  return (
    <Pd style={style}>
      <Flex center width="100%">
        <div style={{ maxWidth: "1320px", width: "100%" }}>{children}</div>
      </Flex>
    </Pd>
  );
}