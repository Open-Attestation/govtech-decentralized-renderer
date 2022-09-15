import { CertificateofServiceTemplate } from "../template";
import { CertificateofServiceSampleData } from "../fixtures/sample";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("certificate of Service", () => {
  it("should render with certificate", () => {
    const { getByText } = render(
      <CertificateofServiceTemplate document={CertificateofServiceSampleData} handleObfuscation={() => void 0} />
    );
    expect(getByText("3G Tan Chen Chen")).toBeInTheDocument();
    expect(getByText("01 October 2022")).toBeInTheDocument();
  });
});
