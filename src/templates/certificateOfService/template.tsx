import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import styled from "@emotion/styled";
import { CertificateofServiceInterface } from "./types";
import certBG from "./img/COS-bg.png";

const Container = styled.div`
  .template-container {
    display: block;
    position: relative;
    background-size: contain;
    width: 210mm;
    height: 297mm;
    margin: auto;
    box-sizing: border-box;
    border: 1px solid #444;
    padding: 10cm 2cm;
    text-align: center;

    font-family: "Times New Roman", Times, serif;
    color: black;
    font-size: 20pt;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .certify-line,
  .award-line {
    font-style: italic;
  }

  .certify-line {
    margin-top: 1.5cm;
  }

  .recipient {
    margin-top: 1.5cm;
    font-weight: bold;
  }

  .award-line {
    margin-top: 3cm;
  }

  .signature-date {
    margin-top: 5cm;
    margin-left: 1cm;
    font-size: 12pt;
    font-weight: bold;
    position: absolute;
  }

  @media print {
    .template-container {
      box-shadow: none;
      margin: 0;
      border: none;
    }
  }

  @page {
    margin: 0;
  }
`;
export const CertificateOfServiceTemplate: FunctionComponent<TemplateProps<CertificateofServiceInterface> & {
  className?: string;
}> = ({ document }) => {
  const recipientName = document.recipient.name;
  const recipientRank = document.recipient.rank;
  const issuedOn = document.issuedOn;

  return (
    <Container>
      <div className="template-container">
        <img className="background" src={certBG} />
        <p className="certify-line">This is to certify that</p>
        <p className="recipient">
          {recipientRank} {recipientName}
        </p>
        <p className="award-line">
          has completed Full-Time National Service <br />
          on {issuedOn}
        </p>
        <p className="signature-date">{issuedOn}</p>
      </div>
    </Container>
  );
};
