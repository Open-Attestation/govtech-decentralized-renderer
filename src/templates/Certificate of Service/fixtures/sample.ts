import { v2 } from "@govtechsg/decentralized-renderer-react-components";
import { CertificateofServiceInterface } from "../types";

export const CertificateofServiceSampleData: CertificateofServiceInterface = {
  recipient: {
    name: "Tan Chen Chen",
    rank: "3G"
  },
  issuers: [
    {
      name: "MINDEF Singapore"
    }
  ],
  issuedOn: "01 October 2022",
  $template: {
    name: "Certificate of Service",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};
