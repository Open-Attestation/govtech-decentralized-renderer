import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./certificateOfAchievement";
import { GovTechCertificateTemplate } from "./certificateOfAchievement/types";
import { geekOut2020Template } from "./geekOut2020";

// export const registry: TemplateRegistry<GovTechCertificateTemplate> = {
//   CERTIFICATE_OF_ACHIEVEMENT: templates,

export const registry: TemplateRegistry<any> = {
  CERTIFICATE_OF_ACHIEVEMENT: templates,
  GEEK_OUT_2020: geekOut2020Template
};
