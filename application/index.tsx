import ReactDOM from "react-dom";
import { sampleCertificate as certificateOfAchievement } from "../src/templates/certificateOfAchievement/fixtures/sample";
import { sampleCertificate as geekOut2020 } from "../src/templates/geekOut2020/fixtures/sample";
import { championSampleCertificate as geekOut2021 } from "../src/templates/geekOut2021/fixtures/sample";
import { CovidLetterOfAppreciationSampleData as CovidLetterOfAppreciation } from "../src/templates/covidAppreciationLetter/fixtures/sample";
import React from "react";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "GovTech document - Certificate of Achievement", document: certificateOfAchievement },
      { name: "GovTech document - GeekOut 2020", document: geekOut2020 },
      { name: "GovTech document - GeekOut 2021", document: geekOut2021 },
      { name: "GovTech document - Covid Appreciation Letter", document: CovidLetterOfAppreciation }
    ]}
  />,
  document.getElementById("root")
);
