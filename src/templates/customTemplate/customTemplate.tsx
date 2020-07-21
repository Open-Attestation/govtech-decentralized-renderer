import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { GovTechCertificateTemplate } from "../sample";
import certificateBase from "../../core/certificate-base.png";


const container = css`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  text-align: center;
  width: 1024px;
  background-image: url(${certificateBase});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
  // min-width: 100%;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
`;

const name = css`
  font-size: 48px;
  // font-style: italic;
  top: 350px;
  left: 90px;
  position: relative;
  // make it anchor at specific position
`;

export const CustomTemplate: FunctionComponent<TemplateProps<GovTechCertificateTemplate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div css={container} className={className} id="custom-template">
      <div css={name}>{document.name}</div>
    </div>
  );
};
