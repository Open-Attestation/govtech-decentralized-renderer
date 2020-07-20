import React, { FunctionComponent } from "react";
import { css } from "@emotion/core";
import certificateBase from "./certificate-base.png";

export const CertificateBase: FunctionComponent = () => (
  <div
    css={css`
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url(${certificateBase});
      background-repeat: no-repeat;
      z-index: -1;
    `}
  />
);
