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
  color: #525254;
`;

const name = css`
  font-size: 38px;
  font-style: italic;
  top: 340px;
  left: 90px;
  position: relative;
  // make it anchor at specific position
  margin-bottom: 15px;
`;

const programmeName = css`
  font-size: 20px;
  // font-style: italic;
  top: 340px;
  left: 90px;
  position: relative;
  margin-bottom: 15px;
`;

const dateRange = css`
  font-size: 16px;
  // font-style: italic;
  top: 340px;
  left: 90px;
  position: relative;
  margin-bottom: 25px;
`;

const signature = css`
  font-size: 16px;
  // font-style: italic;
  top: 340px;
  left: 90px;
  position: relative;
`;

const signatory = css`
  font-size: 16px;
  // font-style: italic;
  top: 340px;
  left: 90px;
  position: relative;
`;

export const CustomTemplate: FunctionComponent<TemplateProps<GovTechCertificateTemplate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div css={container} className={className} id="custom-template">
      <div css={name}>{document.recipient.name}</div>
      <div css={programmeName}>You have completed the {document.programme.name}.</div>
      <div css={dateRange}>
        {document.programme.startDate} to {document.programme.endDate}
      </div>
      <div css={signature}>
        <img src={document.additionalData?.certSignatories[0].signature} />
      </div>
      <div css={signatory}>{document.additionalData.certSignatories[0].name}</div>
      <div css={signatory}>{document.additionalData.certSignatories[0].position}</div>
    </div>
  );
};
