import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { GovTechCertificateTemplate } from "../sample";
import { AllHtmlEntities } from "html-entities";
import { containerCustom } from "./certificateOfAchievement";

const container = css`
  ${containerCustom()};
`;

const recommendationsSectionHeading = css`
  line-height: 1.33333;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
  margin-bottom: 24px;
`;

const recommendationsListItem = css`
  margin-bottom: 24px;
`;

const recommendationsContent = css`
  display: flex;
`;

const quotationMark = css`
  font-size: 3rem;
  line-height: 1.25;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
  margin-right: 12px;
`;

export const Recommendations: FunctionComponent<TemplateProps<GovTechCertificateTemplate> & {
  className?: string;
}> = ({ document, className = "" }) => {
  const entities = new AllHtmlEntities();
  const numberOfRecommendations = document.recommendations?.length ?? 0;
  // show a different message when there are no recommendations
  const display =
    numberOfRecommendations > 0 ? (
      <>
        <div css={recommendationsSectionHeading}>
          Here&rsquo;s what people have to say about {document.recipient.firstName}:
        </div>
        <div>
          {document.recommendations?.map(function(item, i) {
            if (item.recommendation) {
              // show divider if it's not the last item
              const divider = i + 1 !== numberOfRecommendations ? <hr /> : "";

              return (
                <div css={recommendationsListItem} key={item.recommendation}>
                  <div css={recommendationsContent}>
                    <div css={quotationMark}>&ldquo;</div>
                    <div>{entities.decode(item.recommendation)}</div>
                  </div>
                  <div>&mdash; {item.name}</div>
                  {divider}
                </div>
              );
            }
          })}
        </div>
      </>
    ) : (
      <div>It doesn&rsquo;t seem like there&rsquo;s a recommendation for {document.recipient.firstName} yet. 🙁</div>
    );

  return (
    <>
      <div css={container} className={className} id="recommendations">
        <h2>Recommendations</h2>
        {display}
      </div>
    </>
  );
};
