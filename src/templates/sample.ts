import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface GovTechCertificateTemplate extends Document {
  name: string;
  institute: string;
  foo?: {
    title: string;
  };
}

export const sampleCertificate: GovTechCertificateTemplate = {
  name: "John Doe",
  institute: "Institute of John Doe",
  $template: {
    name: "custom",
    type: "EMBEDDED_RENDERER",
    url: "http://localhost:3000"
  },
  foo: {
    title: "Bar is awesome2"
  }
};
