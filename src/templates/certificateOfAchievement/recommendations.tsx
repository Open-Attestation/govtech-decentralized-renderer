import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { GovTechCertificateTemplate } from "../sample";

const container = css`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  position: relative;
`;

interface DocumentTitleProps {
  title: string;
}

export const Recommendations: FunctionComponent<TemplateProps<GovTechCertificateTemplate> & {
  className?: string;
}> = ({ document, className = "" }) => {
  return (
    <>
      <div css={container} className={className} id="certificate-of-achievement">
        <div>
          {document.recommendations?.map(function(item) {
            return (
              <div key={item.recommendation}>
                <div>{item.recommendation}</div>
                <div>{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
