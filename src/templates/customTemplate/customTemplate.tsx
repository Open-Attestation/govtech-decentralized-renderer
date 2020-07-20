import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { GovTechCertificateTemplate } from "../sample";
import { CertificateBase } from "../../core/CertificateBase";

const style = css`
  pre {
    background-color: lightgray;
  }
`;

export const CustomTemplate: FunctionComponent<TemplateProps<GovTechCertificateTemplate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div css={style} className={className} id="custom-template">
      <CertificateBase />
      {document?.name}
    </div>
  );
};
