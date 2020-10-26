import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { format } from "date-fns";
import { GeekOutCertificateTemplate } from "./types";
import certificateBase from "../../core/geekout-certificate-base.png";

const container = css`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  color: #4d4d4e;
  text-align: center;
  width: 1350px;
  position: relative;
  margin: 0 auto;
  @media print {
    @page {
      size: landscape;
    }
  }
`;

const imageRegion = css`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 1350px;
  z-index: -1;
`;

const textRegion = css`
  position: relative;
  top: 460px;
  right: 50px;
  text-align: right;
`;

const recipientName = css`
  font-size: 40px;
  font-style: italic;
  margin-bottom: 16px;
  color: #30509b;
`;

const programmeName = css`
  font-size: 22px;
  margin-bottom: 16px;
`;

const quote = css`
  font-size: 30px;
  margin-bottom: 65px;
  color: #f47921;
`;

const dateRange = css`
  font-size: 22px;
  text-align: left;
  margin-left: 280px;
  top: 0px;
  color: #ffffff;
`;

const signature = css`
  max-height: 90px;
  margin-right: 530px;
`;

const signatory = css`
  font-size: 20px;
  right: 200px;
  text-align: center;
`;

export const GeekOut2020: FunctionComponent<TemplateProps<GeekOutCertificateTemplate> & {
  className?: string;
}> = ({ document, className = "" }) => {
  return (
    <>
      <div css={container} className={className} id="certificate-of-achievement">
        <div css={textRegion}>
          <div id="date-range" css={dateRange}>
            {format(new Date(document.programme.startDate), "d MMM yyyy")} to{" "}
            {format(new Date(document.programme.endDate), "d MMM yyyy")}
          </div>
          <div id="congratulations" css={programmeName}>
            Congratulations
          </div>

          <div id="recipient-name" css={recipientName}>
            {document.recipient.name}
          </div>

          <div id="programme-name" css={programmeName}>
            for successfully completing {document.programme.name}!
          </div>
          <div id="quote" css={quote}>
            <strong>Accept nothing less than your goals!</strong>
          </div>

          <img css={signature} src={document.signatory.signature} />
          <div css={signatory}>
            <strong id="signatory-name">{document.signatory.name}</strong>
          </div>
          <div id="signatory-position" css={signatory}>
            {document.signatory.position}
          </div>
        </div>
        <img css={imageRegion} src={certificateBase} />
      </div>
    </>
  );
};
