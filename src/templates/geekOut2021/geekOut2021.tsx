import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { GeekOutCertificateInterface } from "./types";
import championBackground from "./image/Champion.png";
import runnerUpBackground from "./image/RunnerUp.png";
import completionBackground from "./image/Completion.png";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/core";
import "./font/font.css";

const Container = styled.div`
  background: white;
  width: 297mm;
  height: 209.9mm;
  display: block;
  position: relative;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);

  @media print {
    margin: 0px;
    box-shadow: none;
    overflow: hidden;
  }

  #background-image {
    position: absolute;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0px;
    height: 100%;
    width: 100%;
  }

  #titled-recipient-detail {
    position: absolute;
    z-index: 1;
    top: 217px;
    left: 560px;
    width: 494px;
    height: 160px;

    p {
      position: absolute;
      width: 100%;
      bottom: 0px;
      margin: 0px;
      text-align: right;
      font-size: 35pt;
      font-family: "lucida-sans";
      font-weight: 600;
      font-style: italic;
      color: #4b5054;
    }
  }

  #completion-recipient-detail {
    position: absolute;
    z-index: 1;
    top: 198px;
    left: 555px;
    width: 494px;
    height: 160px;

    p {
      position: absolute;
      width: 100%;
      bottom: 0px;
      margin: 0px;
      text-align: right;
      font-size: 31pt;
      font-family: "lucida-sans";
      font-weight: 600;
      font-style: italic;
      color: #4b5054;
    }
  }
`;

type documentType = "champion" | "runner-up" | "completion";
const getBackgroundImage = (documentType: documentType): any => {
  switch (documentType) {
    case "champion":
      return championBackground;
    case "runner-up":
      return runnerUpBackground;
    case "completion":
      return completionBackground;
  }
};

export const GeekOut2021: FunctionComponent<TemplateProps<GeekOutCertificateInterface>> = ({ document }) => {
  const backgroundImage = getBackgroundImage(document.type);
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0px;
          }
        `}
      />
      <Container id="geekout-cert">
        <div id="background-image" style={{ backgroundImage: `url(${backgroundImage})` }} />
        {document.type == "champion" || document.type == "runner-up" ? (
          <div id="titled-recipient-detail">
            <p>{document.recipient.name}</p>
          </div>
        ) : (
          <div id="completion-recipient-detail">
            <p>{document.recipient.name}</p>
          </div>
        )}
      </Container>
    </>
  );
};
