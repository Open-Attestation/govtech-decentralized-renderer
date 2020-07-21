import React, { FunctionComponent } from "react";
import { css } from "@emotion/core";
import certificateBase from "./certificate-base.png";

export const CertificateBase: FunctionComponent = () => (
  <div
    css={css`
      background-image: url(${certificateBase});
      background-repeat: no-repeat;
      min-height: 100%;
      min-width: 100%;
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
    `}
  />
);
