import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface GovTechCertificateTemplate extends Document {
  name: string;
  recipient: {
    firstName: string;
    lastName: string;
    email?: string;
    nric?: string;
  };
  programme: {
    name: string;
    startDate: string;
    endDate: string;
  };
  signatory: {
    name: string;
    position: string;
    organisation: string;
    signature: string;
  };
}

export const sampleCertificate: GovTechCertificateTemplate = {
  name: "Certificate of Achievement",
  recipient: {
    firstName: "Barry",
    lastName: "Lim"
  },
  programme: {
    name: "GovTech Internship Programme",
    startDate: "4-May-20",
    endDate: "7-Oct-20"
  },
  signatory: {
    name: "Evangeline Chua",
    position: "Chief People Officer",
    organisation: "GovTech Singapore",
    signature:
      "data:image/png;base64,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"
  },
  $template: {
    name: "CERTIFICATE_OF_ACHIEVEMENT",
    type: "EMBEDDED_RENDERER",
    url: "http://localhost:3000"
  }
};
