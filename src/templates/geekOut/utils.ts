import championBackground from "./geekOut2021/image/Champion.png";
import runnerUpBackground from "./geekOut2021/image/RunnerUp.png";
import completionBackground from "./geekOut2021/image/Completion.png";
import championBackgroundV2 from "./geekOutV2/image/champion.png";
import completionBackgroundV2 from "./geekOutV2/image/completion.png";
import runnerUpBackgroundV2 from "./geekOutV2/image/runnerUp.png";
import { DocumentType } from "./geekOutV2/types";

export const getBackgroundImage = (documentType: DocumentType, isV2: boolean): any => {
  switch (documentType) {
    case "champion":
      return isV2 ? championBackgroundV2 : championBackground;
    case "runner-up":
      return isV2 ? runnerUpBackgroundV2 : runnerUpBackground;
    case "completion":
      return isV2 ? completionBackgroundV2 : completionBackground;
  }
};
