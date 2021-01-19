import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
// import { css } from "@emotion/core";
import { CovidCOAInterface } from "./types";
import { get } from "lodash";
import "./templateStyle.css";
import govTechLogo from "./img/GovtechLogo.jpg";

export const CovidCOATemplate: FunctionComponent<TemplateProps<CovidCOAInterface> & { className?: string }> = ({
  document
}) => {
  const recipientName = get(document, "recipient.name");
  const recipientFirstName = get(document, "recipient.firstName");
  const recipientDivision = get(document, "recipient.division");
  const recipientSite = get(document, "recipient.site");
  const signature = get(document, "signature");

  return (
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
          cannot agree more with that. In these early days of Phase 3, the Leadership Team and I would like to take this
          opportunity to sincerely thank you for your contribution in the past year to get us here.
        </p>
        <p>
          Whilst the year had brought its challenges, we also appreciate that 2020 brought out the best in all of us.
          Embracing our ABC values has kept us laser focused on our mission of materializing a digital government, while
          dealing with the pandemic and keeping each other and our fellow Singaporeans safe.
        </p>
        <p>
          There is still a long journey ahead of us as we move into Phase 3 and beyond, we urge you to adopt a holistic
          view on your well-being; mind and body. We have lots more to accomplish in 2021, leveraging from a vantage
          position of COVID-19 induced digital gains.
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
  );
};
