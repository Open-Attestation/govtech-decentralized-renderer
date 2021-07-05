import { v2 } from "@govtechsg/decentralized-renderer-react-components";

export interface GeekOutCertificateInterface extends v2.OpenAttestationDocument {
  recipient: {
    name: string;
  };
  type: "champion" | "runner-up" | "completion";
}
