import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { GovTechCertificateTemplate } from "../sample";
import certificateBase from "../../core/certificate-base.png";

const container = css`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  color: #4e4e50;
`;

const background = css`
  z-index: -1;
  height: 100%;
  width: 100%;
`;

const textRegion = css`
  position: absolute;
  top: 52.5vh;
  left: 34vw;
  text-align: center;
`;

const documentName = css`
  font-size: 6vh;
  position: relative;
  text-transform: uppercase;
  font-variant: small-caps;
  color: #b31e8e;
  font-weight: bold;
`;

const documentNameSmaller = css`
  font-size: 4vh;
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
  font-size: 6vh;
  font-style: italic;
  margin-bottom: 1.5vh;
`;

const programmeName = css`
  font-size: 4vh;
  margin-bottom: 1.5px;
`;

const dateRange = css`
  font-size: 3.5vh;
  margin-bottom: 25vh;
`;

const signature = css`
  max-height: 20vh;
`;

const signatory = css`
  font-size: 4vh;
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
