import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./certificateOfAchievement";
import { GovTechCertificateTemplate } from "./sample";

export const registry: TemplateRegistry<GovTechCertificateTemplate> = {
  CERTIFICATE_OF_ACHIEVEMENT: templates
};
