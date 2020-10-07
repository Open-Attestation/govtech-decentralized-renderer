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
  position: relative;
  background-color: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 20px 0;
  padding: 20px 15px;

  cite {
    color: #999;
    font-size: 18px;
  }
`;

const recommendationsContent = css`
  position: relative;
  padding: 20px 40px;

  &::before,
  &::after {
    position: absolute;
    color: #ccc;
    font-size: 60px;
    line-height: 1;
  }

  &::before {
    content: open-quote;
    top: 0;
    left: 10px;
  }

  &::after {
    content: close-quote;
    bottom: 0;
    right: 10px;
  }

  p {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 24px;
    color: #555;
  }
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
        {document.recommendations?.map(function(item, i) {
          if (item.recommendation) {
            return (
              <blockquote css={recommendationsListItem} key={item.recommendation}>
                <div css={recommendationsContent}>
                  <p>{entities.decode(item.recommendation)}</p>
                </div>
                <cite>&mdash; {item.name}</cite>
              </blockquote>
            );
          }
        })}
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