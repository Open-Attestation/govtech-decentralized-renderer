import { CovidCOATemplate } from "../template";
import { covidCOASampleData } from "../fixtures/sample";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

describe("covidAppreciationLetter", () => {
  it("should render with certificate", () => {
    const { getByText } = render(<CovidCOATemplate document={covidCOASampleData} handleObfuscation={() => void 0} />);
    expect(getByText("Steven Koh")).toBeInTheDocument();
    expect(getByText("GDS(Sandcrawler)")).toBeInTheDocument();
    expect(getByText("Dear Steven,")).toBeInTheDocument();
    expect(getByText("Kok Ping Soon")).toBeInTheDocument();
  });
});
