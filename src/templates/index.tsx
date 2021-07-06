import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./certificateOfAchievement";
import { geekOut2020Template } from "./geekOut2020";
import { geekOut2021Template } from "./geekOut2021";
import { covidLetterOfAppreciationTemplate } from "./covidAppreciationLetter";

export const registry: TemplateRegistry<any> = {
  CERTIFICATE_OF_ACHIEVEMENT: templates,
  GEEK_OUT_2020: geekOut2020Template,
  GEEK_OUT_2021: geekOut2021Template,
  COVID_LETTER_OF_APPRECIATION_2021: covidLetterOfAppreciationTemplate
};
