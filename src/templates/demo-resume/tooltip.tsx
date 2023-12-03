import tooltipArrow from "./v1/images/tooltip_arrow.svg";
import React, { FunctionComponent, useState } from "react";

interface IconProps {
  text: { title: string; description: string };
  noPopup?: boolean;
  customStyle?: React.CSSProperties;
  image: any;
}

export const TooltipIcon: FunctionComponent<IconProps> = ({ text, noPopup = false, customStyle = {}, image }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", ...customStyle }}>
      <img
        src={image}
        style={{ position: "relative" }}
        onMouseEnter={() => setIsVisible(noPopup ? false : true)}
        onMouseLeave={() => setIsVisible(false)}
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
          visibility: isVisible ? "visible" : "hidden"
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
          {text.title}
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
          {text.description}
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
