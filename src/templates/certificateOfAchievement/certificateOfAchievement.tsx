import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { format } from "date-fns";
import { GovTechCertificateTemplate } from "../sample";
import certificateBase from "../../core/certificate-base.png";

const container = css`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  color: #4e4e50;
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
  return (
    <div css={documentName}>
      {title.split(" ").map(function(word) {
        if (list.includes(word)) {
          return <span css={documentNameSmaller}>{word} </span>;
        } else {
          return <>{word} </>;
        }
      })}
    </div>
  );
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
  return (
    <>
      <div css={container} className={className} id="certificate-of-achievement">
        <div css={textRegion}>
          <DocumentTitle title={document.name} />
          <div css={programmeName}>Achievement unlocked! Way to go!</div>

          <div css={recipientName}>
            {document.recipient.firstName} {document.recipient.lastName}
          </div>

          <div css={programmeName}>You have completed the {document.programme.name}.</div>

          <div css={dateRange}>
            {format(new Date(document.programme.startDate), "d MMM yyyy")} to{" "}
            {format(new Date(document.programme.endDate), "d MMM yyyy")}
          </div>

          <img css={signature} src={document.signatory.signature} />
          <div css={signatory}>
            <strong>{document.signatory.name}</strong>
          </div>
          <div css={signatory}>{document.signatory.position}</div>
        </div>
        <img css={imageRegion} src={certificateBase} />
      </div>
    </>
  );
};
