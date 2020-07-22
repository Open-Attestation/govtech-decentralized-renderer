import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { GovTechCertificateTemplate } from "../sample";
import certificateBase from "../../core/certificate-base.png";

const container = css`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  text-align: center;
  color: #4e4e50;
`;

const background = css`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: -1;
`;

const textRegion = css`
  left: 120px;
  top: 340px;
  position: relative;
  // Can this scale by zoom?
`;

const documentName = css`
  font-size: 58px;
  position: relative;
  text-transform: uppercase;
  font-variant: small-caps;
  color: #b31e8e;
  font-weight: bold;
`;

const documentNameSmaller = css`
  font-size: 40px;
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
  font-size: 42px;
  font-style: italic;
  margin-bottom: 15px;
`;

const programmeName = css`
  font-size: 32px;
  margin-bottom: 15px;
`;

const dateRange = css`
  font-size: 28px;
  margin-bottom: 88px;
`;

const signature = css`
  max-height: 150px;
`;

const signatory = css`
  font-size: 28px;
`;

export const CertificateOfAchievement: FunctionComponent<TemplateProps<GovTechCertificateTemplate> & {
  className?: string;
}> = ({ document, className = "" }) => {
  // TODO: formatted date
  return (
    <>
      <div css={container} className={className} id="certificate-of-achievement">
        <img css={background} src={certificateBase} />
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
      </div>
    </>
  );
};
