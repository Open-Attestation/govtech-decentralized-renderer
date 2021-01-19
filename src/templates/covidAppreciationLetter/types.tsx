import { v2 } from "@govtechsg/decentralized-renderer-react-components";

export interface CovidCOAInterface extends v2.OpenAttestationDocument {
  name: string;
  recipient: {
    name: string;
    firstName: string;
    division: string;
    site: string;
  };
  signatory: {
    name: string;
    position: string;
    organisation: string;
    signature: string;
  };
}
