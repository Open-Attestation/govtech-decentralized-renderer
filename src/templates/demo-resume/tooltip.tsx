import { VERIFICATION_TYPE } from "./types";
import verifiedIcon from "./images/verified_icon.svg";
import demonstratedIcon from "./images/demonstrated_icon.svg";
import declaredIcon from "./images/declared_icon.svg";
import tooltipArrow from "./images/tooltip_arrow.svg";
import React, { FunctionComponent, useState } from "react";

const ICON_MAP = {
  VERIFIED: verifiedIcon,
  DEMONSTRATED: demonstratedIcon,
  DECLARED: declaredIcon
};

export const TOOLTIP_TEXT = {
  VERIFIED: {
    title: "Verified",
    description: "Data from SkillsFuture accredited courses or Singapore Government systems"
  },
  DEMONSTRATED: { title: "Demonstrated", description: "Data endorsed by co-worker" },
  DECLARED: { title: "Declared", description: "Data entered by individual" }
};

interface IconProps {
  type: VERIFICATION_TYPE;
  noPopup?: boolean;
  customStyle?: React.CSSProperties;
}

export const TooltipIcon: FunctionComponent<IconProps> = ({ type, noPopup = false, customStyle = {} }) => {
  const [cansee, setCansee] = useState(false);
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", ...customStyle }}>
      <img
        src={ICON_MAP[type]}
        style={{ position: "relative" }}
        onMouseEnter={() => setCansee(noPopup ? false : true)}
        onMouseLeave={() => setCansee(false)}
      />
      <div
        style={{
          borderRadius: "4px",
          backgroundColor: "#1F2A37",
          position: "absolute",
          padding: "10px",
          width: "240px",
          minWidth: "140px",
          bottom: "165%",
          left: "50%",
          transform: "translate(-50%, 0)",
          visibility: `${cansee ? "visible" : "hidden"}`
        }}
      >
        <div
          style={{
            color: "white",
            textAlign: "left",
            fontFamily: "sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "150%",
            marginBottom: "10px"
          }}
        >
          {TOOLTIP_TEXT[type].title}
        </div>
        <div
          style={{
            color: "#E5E7EB",
            textAlign: "left",
            fontFamily: "sans-serif",
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "150%"
          }}
        >
          {TOOLTIP_TEXT[type].description}
        </div>
        <img
          src={tooltipArrow}
          style={{
            position: "absolute",
            top: "100%",
            left: "46%"
          }}
        />
      </div>
    </div>
  );
};
