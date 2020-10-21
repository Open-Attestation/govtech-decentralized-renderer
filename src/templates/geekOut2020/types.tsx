import { v2 } from "@govtechsg/decentralized-renderer-react-components";
import { geekout } from "@govtechsg/oa-schemata";

export interface GeekOutCertificateTemplate extends v2.OpenAttestationDocument, geekout.Geekout {
  recipient: {
    name: string;
  };
}
