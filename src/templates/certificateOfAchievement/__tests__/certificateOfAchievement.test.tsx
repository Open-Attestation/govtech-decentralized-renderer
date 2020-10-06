import { CertificateOfAchievement } from "../certificateOfAchievement";
import { sampleCertificate } from "../../sample";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("customTemplate", () => {
  it("should render the certificate provided by the document", () => {
    const { getByText } = render(
      <CertificateOfAchievement document={sampleCertificate} handleObfuscation={() => void 0} />
    );
    expect(getByText("Certificate")).toBeInTheDocument();
    expect(getByText("of")).toBeInTheDocument();
    expect(getByText("Achievement")).toBeInTheDocument();
  });
  it("should render with recipient name provided by the document", () => {
    const { getByText } = render(
      <CertificateOfAchievement document={sampleCertificate} handleObfuscation={() => void 0} />
    );
    expect(getByText("Steven Koh")).toBeInTheDocument();
  });
  it("should render with programme name provided by the document", () => {
    const { getByText } = render(
      <CertificateOfAchievement document={sampleCertificate} handleObfuscation={() => void 0} />
    );
    expect(getByText("You have completed the GovTech Internship Programme.")).toBeInTheDocument();
  });
  it("should render with the start and end date provided by the document (format 1: mm-ddd-yyyy)", () => {
    const { getByText } = render(
      <CertificateOfAchievement document={sampleCertificate} handleObfuscation={() => void 0} />
    );
    expect(getByText("4 May 2020 to 7 Oct 2020")).toBeInTheDocument();
  });
  it("should render with the start and end date provided by the document (format 2: mm ddd yy)", () => {
    const { getByText } = render(
      <CertificateOfAchievement
        document={{
          ...sampleCertificate,
          programme: {
            ...sampleCertificate.programme,
            startDate: "04 May 20",
            endDate: "07 Oct 20"
          }
        }}
        handleObfuscation={() => void 0}
      />
    );
    expect(getByText("4 May 2020 to 7 Oct 2020")).toBeInTheDocument();
  });
  it("should render with the start and end date provided by the document (format 3: mm/ddd/yy)", () => {
    const { getByText } = render(
      <CertificateOfAchievement
        document={{
          ...sampleCertificate,
          programme: {
            ...sampleCertificate.programme,
            startDate: "04/May/20",
            endDate: "07/Oct/20"
          }
        }}
        handleObfuscation={() => void 0}
      />
    );
    expect(getByText("4 May 2020 to 7 Oct 2020")).toBeInTheDocument();
  });
  it("should render with the start and end date provided by the document (format 4: ISO-8601)", () => {
    const { getByText } = render(
      <CertificateOfAchievement
        document={{
          ...sampleCertificate,
          programme: {
            ...sampleCertificate.programme,
            startDate: "2020-05-04",
            endDate: "2020-10-07"
          }
        }}
        handleObfuscation={() => void 0}
      />
    );
    expect(getByText("4 May 2020 to 7 Oct 2020")).toBeInTheDocument();
  });
  it("should render with the signatory details provided by the document", () => {
    const { getByText } = render(
      <CertificateOfAchievement document={sampleCertificate} handleObfuscation={() => void 0} />
    );
    expect(getByText("Evangeline Chua")).toBeInTheDocument();
    expect(getByText("Chief People Officer")).toBeInTheDocument();
  });
});
