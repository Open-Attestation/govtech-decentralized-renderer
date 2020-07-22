import { CertificateOfAchievement } from "../certificateOfAchievement";
import { sampleCertificate } from "../../sample";
import { render } from "@testing-library/react";
import React from "react";

describe("customTemplate", () => {
  it("should render with recipient name provided by the document", () => {
    const { queryByText } = render(
      <CertificateOfAchievement document={sampleCertificate} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("John Doe")).toBeTruthy();
  });
  it("should render with programme name provided by the document", () => {
    const { queryByText } = render(
      <CertificateOfAchievement document={{ ...sampleCertificate }} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("GovTech Internship Programme")).toBeTruthy();
  });
});