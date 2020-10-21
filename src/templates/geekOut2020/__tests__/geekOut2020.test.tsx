import { GeekOut2020 } from "../geekOut2020";
import { sampleCertificate } from "../fixtures/sample";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("geekOut2020", () => {
  it("should render with congratulations", () => {
    const { getByText } = render(<GeekOut2020 document={sampleCertificate} handleObfuscation={() => void 0} />);
    expect(getByText("Congratulations")).toBeInTheDocument();
  });
  it("should render with recipient name provided by the document", () => {
    const { getByText } = render(<GeekOut2020 document={sampleCertificate} handleObfuscation={() => void 0} />);
    expect(getByText("Alice Tan")).toBeInTheDocument();
  });
  it("should render with programme name provided by the document", () => {
    const { getByText } = render(<GeekOut2020 document={sampleCertificate} handleObfuscation={() => void 0} />);
    expect(getByText("for successfully completing GeekOut 2020!")).toBeInTheDocument();
  });
  it("should render with quote", () => {
    const { getByText } = render(<GeekOut2020 document={sampleCertificate} handleObfuscation={() => void 0} />);
    expect(getByText("Accept nothing less than your goals!")).toBeInTheDocument();
  });
  it("should render with the start and end date provided by the document (format 1: mm-ddd-yyyy)", () => {
    const { getByText } = render(
      <GeekOut2020
        document={{
          ...sampleCertificate,
          programme: {
            ...sampleCertificate.programme,
            startDate: "10-12-2020",
            endDate: "10-14-2020"
          }
        }}
        handleObfuscation={() => void 0}
      />
    );
    expect(getByText("12 Oct 2020 to 14 Oct 2020")).toBeInTheDocument();
  });
  it("should render with the start and end date provided by the document (format 2: mm ddd yy)", () => {
    const { getByText } = render(
      <GeekOut2020
        document={{
          ...sampleCertificate,
          programme: {
            ...sampleCertificate.programme,
            startDate: "12 Oct 20",
            endDate: "14 Oct 20"
          }
        }}
        handleObfuscation={() => void 0}
      />
    );
    expect(getByText("12 Oct 2020 to 14 Oct 2020")).toBeInTheDocument();
  });
  it("should render with the start and end date provided by the document (format 3: mm/ddd/yy)", () => {
    const { getByText } = render(
      <GeekOut2020
        document={{
          ...sampleCertificate,
          programme: {
            ...sampleCertificate.programme,
            startDate: "12/Oct/20",
            endDate: "14/Oct/20"
          }
        }}
        handleObfuscation={() => void 0}
      />
    );
    expect(getByText("12 Oct 2020 to 14 Oct 2020")).toBeInTheDocument();
  });
  it("should render with the start and end date provided by the document (format 4: ISO-8601)", () => {
    const { getByText } = render(<GeekOut2020 document={sampleCertificate} handleObfuscation={() => void 0} />);
    expect(getByText("12 Oct 2020 to 14 Oct 2020")).toBeInTheDocument();
  });
  it("should render with the signatory details provided by the document", () => {
    const { getByText } = render(<GeekOut2020 document={sampleCertificate} handleObfuscation={() => void 0} />);
    expect(getByText("Chan Cheow Hoe")).toBeInTheDocument();
    expect(getByText("Deputy Chief Executive")).toBeInTheDocument();
  });
});
