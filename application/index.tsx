import ReactDOM from "react-dom";
import { sampleCertificate } from "../src/templates/sample";
import React from "react";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Default document", document: sampleCertificate },
      {
        name: "Red document",
        document: {
          ...sampleCertificate,
          foo: "bar",
          $template: {
            ...sampleCertificate.$template,
            name: "red"
          }
        }
      }
    ]}
  />,
  document.getElementById("root")
);
