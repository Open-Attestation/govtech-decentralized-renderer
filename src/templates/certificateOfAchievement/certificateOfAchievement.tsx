import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { GovTechCertificateTemplate } from "../sample";
import certificateBase from "../../core/certificate-base.png";

const container = css`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  color: #4e4e50;
  text-align: center;
  height: 954px;
  width: 1350px;
  position: relative;
  box-shadow: 0 2px 8px rgba(31, 45, 61, 0.05);
  transform-origin: 0 0 0;
  transform: scale(1.40881) translate(0px, 0px);
  margin: 0 auto;
`;

const imageRegion = css`
  // visibility: hidden;
  position: absolute;
  left: 0px;
  top: 0px;
  height: 954px;
  width: 1350px;
  z-index: -1;
`;

const textRegion = css`
  position: relative;
  top: 275px;
  left: 95px;
  text-align: center;
`;

const documentName = css`
  font-size: 48px;
  position: relative;
  text-transform: uppercase;
  font-variant: small-caps;
  color: #b31e8e;
  font-weight: bold;
`;

const documentNameSmaller = css`
  font-size: 32px;
`;

interface DocumentTitleProps {
  title: string;
}

const DocumentTitle: FunctionComponent<DocumentTitleProps> = ({ title }) => {
  // From https://data.grammarbook.com/blog/capitalization/capitalizing-composition-titles-part-ii/
  const list = ["of"];
  const display: JSX.Element[] = [];
  title.split(" ").forEach(function(word) {
    if (list.includes(word)) {
      display.push(<span css={documentNameSmaller}>{word} </span>);
    } else {
      display.push(<>{word} </>);
    }
  });
  return <div css={documentName}>{display}</div>;
};

const recipientName = css`
  font-size: 40px;
  font-style: italic;
  margin-bottom: 16px;
`;

const programmeName = css`
  font-size: 24px;
  margin-bottom: 16px;
`;

const dateRange = css`
  font-size: 20px;
  margin-bottom: 64px;
`;

const signature = css`
  max-height: 120px;
`;

const signatory = css`
  font-size: 20px;
`;

export const CertificateOfAchievement: FunctionComponent<TemplateProps<GovTechCertificateTemplate> & {
  className?: string;
}> = ({ document, className = "" }) => {
  // TODO: formatted date
  return (
    <>
      <div css={container} className={className} id="certificate-of-achievement">
        <div css={textRegion}>
          <DocumentTitle title={document.name} />
          <div css={programmeName}>🏆 Achievement unlocked! Way to go!</div>

          <div css={recipientName}>{document.recipient.name}</div>

          <div css={programmeName}>You have completed the {document.programme.name}.</div>

          <div css={dateRange}>
            {document.programme.startDate} to {document.programme.endDate}
          </div>

          <img css={signature} src={document.additionalData?.certSignatories[0].signature} />
          <div css={signatory}>
            <strong>{document.additionalData.certSignatories[0].name}</strong>
          </div>
          <div css={signatory}>{document.additionalData.certSignatories[0].position}</div>
        </div>
        <img css={imageRegion} src={certificateBase} />
      </div>
    </>
  );
};
