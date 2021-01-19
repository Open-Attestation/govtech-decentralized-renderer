import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import styled from "@emotion/styled";
import { CovidLetterOfAppreciationInterface } from "./types";
import govTechLogo from "./img/GovtechLogo.jpg";

const Container = styled.div`
  .template-container {
    height: 297mm;
    width: 210mm;
    position: relative;
    background-color: white;
    color: black;
    font-family: "Arial";
    font-size: 12pt;
    padding: 35px 70px;
    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .template-header {
    text-align: right;
  }

  .template-header img {
    width: 30%;
  }

  .recipient-table {
    margin-top: 68px;
  }

  .recipient-table p {
    margin: 0px 0px 5px 0px;
    line-height: 16pt;
  }

  .main-content {
    width: 90%;
    word-spacing: 1px;
    margin-top: 38px;
  }

  .main-content p {
    line-height: 16pt;
    margin-top: 25px;
  }

  .main-content p:nth-of-type(2) {
    margin: 21px 0px 21px 0px;
  }

  .main-content img {
    width: 30%;
    margin-top: 40px;
  }

  .main-content p:last-child {
    margin-top: 5px;
  }

  .template-footer {
    position: absolute;
    bottom: 50px;
    font-size: 8pt;
    line-height: 9.65pt;
    letter-spacing: 1px;
    color: #595a5a;
  }

  .template-footer p:nth-of-type(1),
  .template-footer p span {
    color: #3fb4f0;
  }

  .template-footer p span {
    margin-right: 5px;
  }
`;
export const CovidLetterOfAppreciationTemplate: FunctionComponent<TemplateProps<CovidLetterOfAppreciationInterface> & {
  className?: string;
}> = ({ document }) => {
  const recipientName = document.recipient.name;
  const recipientFirstName = document.recipient.firstName;
  const recipientDivision = document.recipient.division;
  const recipientSite = document.recipient.site;
  const signature = document.signatory.signature;

  return (
    <Container>
      <div className="template-container">
        <div className="template-header">
          <img src={govTechLogo} alt="GovTech Logo" />
        </div>
        <div className="recipient-table">
          <p>{recipientName}</p>
          <p>
            {recipientDivision}({recipientSite})
          </p>
          <p>Government Technology Agency</p>
        </div>

        <div className="main-content">
          <p>Dear {recipientFirstName},</p>
          <p>THANK YOU FOR YOUR COVID-19 CONTRIBUTION</p>
          <p>
            It has been said many times and many ways that 2020 was an extraordinary year; the GovTech Leadership Team
            cannot agree more with that. In these early days of Phase 3, the Leadership Team and I would like to take
            this opportunity to sincerely thank you for your contribution in the past year to get us here.
          </p>
          <p>
            Whilst the year had brought its challenges, we also appreciate that 2020 brought out the best in all of us.
            Embracing our ABC values has kept us laser focused on our mission of materializing a digital government,
            while dealing with the pandemic and keeping each other and our fellow Singaporeans safe.
          </p>
          <p>
            There is still a long journey ahead of us as we move into Phase 3 and beyond, we urge you to adopt a
            holistic view on your well-being; mind and body. We have lots more to accomplish in 2021, leveraging from a
            vantage position of COVID-19 induced digital gains.
          </p>
          <p>Meanwhile, remain safe. Onwards and upwards. Thank you.</p>

          <img src={signature} />
          <p>Kok Ping Soon</p>
        </div>

        <div className="template-footer">
          <p>tech.gov.sg</p>
          <p>
            GOVERNMENT TECHNOLOGY AGENCY <br />
            10 Pasir Panjang Road #10-01 <br />
            Mapletree Business City, Singapore 117438 <br />
            <span>T</span> +65 6211 0888 <br />
            <span>E</span> info@tech.gov.sg <br />
          </p>
        </div>
      </div>
    </Container>
  );
};
