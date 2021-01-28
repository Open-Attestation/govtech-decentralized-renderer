import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./certificateOfAchievement";
import { geekOut2020Template } from "./geekOut2020";
import { covidLetterOfAppreciationTemplate } from "./covidAppreciationLetter";
import { XMLRendererTemplate } from "./xmlRenderer";

export const registry: TemplateRegistry<any> = {
  CERTIFICATE_OF_ACHIEVEMENT: templates,
  GEEK_OUT_2020: geekOut2020Template,
  COVID_LETTER_OF_APPRECIATION_2021: covidLetterOfAppreciationTemplate,
  XML_RENDERER: XMLRendererTemplate
};
