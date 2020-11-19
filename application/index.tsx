import ReactDOM from "react-dom";
import { sampleCertificate as certificateOfAchievement } from "../src/templates/certificateOfAchievement/fixtures/sample";
import { sampleCertificate as geekOut2020 } from "../src/templates/geekOut2020/fixtures/sample";
import React from "react";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "GovTech document - Certificate of Achievement", document: certificateOfAchievement },
      { name: "GovTech document - GeekOut 2020", document: geekOut2020 }
    ]}
  />,
  document.getElementById("root")
);
