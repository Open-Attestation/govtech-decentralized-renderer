import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEdit } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/core";
import "./font/font.css";

interface SimplePrivacyFilterBannerProps {
  /**
   * handler called when toggle edition is requested
   */
  onToggleEditable: () => void;
  onDownloadDocument: () => void;
  className?: string;
}

const style = css`
  @media print {
    display: none;
  }
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  border: 1px solid #8f949c;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: whitesmoke;
  display: flex;
  margin-bottom: 20px;
  width: 21cm;
  justify-content: space-between;
  font-family: sans-serif;
  .icon {
    cursor: pointer;
  }
`;
/**
 * Banner with icon to toggle certificate obfuscation mode
 */
export const SimplePrivacyFilterBanner: FunctionComponent<SimplePrivacyFilterBannerProps> = ({
  onToggleEditable,
  onDownloadDocument,
  className = ""
}) => (
  <div css={style} className={className}>
    <div>
      <div>
        <div style={{ fontWeight: 700, marginBottom: "15px", color: "#252525" }}>Privacy Filter Enabled</div>
      </div>
      <div style={{ color: "#252525" }}>
        Edit this document by removing redactable information by clicking on the edit button. Downloaded document
        remains valid!
      </div>
    </div>
    <div className="icon" onClick={onToggleEditable}>
      <FontAwesomeIcon
        icon={faEdit}
        title="toggle obfuscation"
        style={{ width: "23px", height: "23px", color: "#252525" }}
      />
    </div>
    <div className="icon" onClick={onDownloadDocument}>
      <FontAwesomeIcon
        icon={faDownload}
        title="download document"
        style={{ marginLeft: "5px", width: "23px", height: "23px", color: "#252525" }}
      />
    </div>
  </div>
);
