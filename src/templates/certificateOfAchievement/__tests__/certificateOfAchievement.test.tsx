import { CertificateOfAchievement } from "../certificateOfAchievement";
import { sampleCertificate } from "../../sample";
import { render } from "@testing-library/react";
import React from "react";

describe("customTemplate", () => {
  it("should render the certificate provided by the document", () => {
    const { queryByText } = render(
      <CertificateOfAchievement document={sampleCertificate} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("Certificate of Achievement")).toBeTruthy();
  });
  it("should render with recipient name provided by the document", () => {
    const { queryByText } = render(
      <CertificateOfAchievement document={sampleCertificate} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("Jia Jian Goi")).toBeTruthy();
  });
  it("should render with programme name provided by the document", () => {
    const { queryByText } = render(
      <CertificateOfAchievement document={{ ...sampleCertificate }} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("GovTech Internship Programme")).toBeTruthy();
  });
  it("should render with the start and end date provided by the document", () => {
    const { queryByText } = render(
      <CertificateOfAchievement document={{ ...sampleCertificate }} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("4 May 2020")).toBeTruthy();
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("7 Oct 2020")).toBeTruthy();
  });
  it("should render with the signatory details provided by the document", () => {
    const { queryByText } = render(
      <CertificateOfAchievement document={{ ...sampleCertificate }} handleObfuscation={() => void 0} />
    );
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("Evangeline Chua")).toBeTruthy();
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(queryByText("Chief People Officer")).toBeTruthy();
  });
});
