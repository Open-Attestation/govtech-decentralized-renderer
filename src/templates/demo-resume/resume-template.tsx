import { ObfuscatableValue, TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { Resume } from "./types";
import React, { FunctionComponent, useState } from "react";
import { Detail, Divider, Ellipse, Grid, Name, Page, Row, Section } from "./styled-components";
import { SimplePrivacyFilterBanner } from "./privacy-banner";
import { TOOLTIP_TEXT, TooltipIcon } from "./tooltip";

const downloadJSON = (resume: any) => {
  const jsonData = JSON.stringify(resume, null, 2);
  const blob = new Blob([jsonData], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "document.trustdoc";
  a.click();
  URL.revokeObjectURL(url);
};

export const ResumeTemplate: FunctionComponent<TemplateProps<Resume>> = ({
  wrappedDocument,
  document,
  handleObfuscation
}) => {
  const [editable, setEditable] = useState(false);

  return (
    <>
      <SimplePrivacyFilterBanner
        onToggleEditable={() => setEditable(!editable)}
        onDownloadDocument={() => downloadJSON(wrappedDocument)}
      />
      <Page>
        <Name>{document.name}</Name>
        <Row>
          <Detail>HP: {document.mobileNumber}</Detail>
          <Ellipse />
          <Detail>{document.email}</Detail>
          <Ellipse />
          <Detail>{document.address}</Detail>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Divider />
          <Section>Skills</Section>
          <Divider />
        </Row>
        {document.skills.map((skill, skillIndex) => {
          const skillsInCategory = skill.values;
          if (skill.values.filter(skill => skill.name !== undefined).length === 0) {
            return <></>;
          }
          return (
            <>
              <Detail style={{ marginBottom: "15px", marginTop: "15px" }} bold>
                {skill.category}
              </Detail>
              <Grid>
                {skillsInCategory.map((value, valueIndex) => (
                  <>
                    {value.name && (
                      <Row style={{ width: "100%", fontFamily: "PT Serif" }}>
                        <ObfuscatableValue
                          value={value.name}
                          editable={editable}
                          onObfuscationRequested={() =>
                            handleObfuscation(`skills[${skillIndex}].values[${valueIndex}].name`)
                          }
                        />
                        {value.type.map((type, typeIndex) => {
                          return <TooltipIcon type={type} customStyle={{ marginLeft: "5px" }} />;
                        })}
                      </Row>
                    )}
                  </>
                ))}
              </Grid>
            </>
          );
        })}

        <Row style={{ marginTop: "15px" }}>
          <Divider />
          <Section>Education</Section>
          <Divider />
        </Row>
        {document.education.map((entry, i) => {
          return (
            <>
              <Row style={{ marginTop: "15px" }}>
                <Detail bold>{entry.name}</Detail>
                <TooltipIcon type={entry.type[0]} customStyle={{ marginLeft: "5px" }} />
              </Row>
              <Detail>
                {entry.institution}, {entry.startDate}-{entry.endDate}
              </Detail>
            </>
          );
        })}

        <Row style={{ marginTop: "15px" }}>
          <Divider />
          <Section style={{ whiteSpace: "nowrap" }}>Work History</Section>
          <Divider />
        </Row>
        {document.work.map((work, i) => {
          return (
            <>
              <Row style={{ marginTop: "15px", gap: "5px" }}>
                <Detail bold>{work.companyName},</Detail>
                <Detail>
                  {work.startDate}-{work.endDate}
                </Detail>
                <TooltipIcon type={work.companyType[0]} customStyle={{ marginLeft: "5px" }} />
              </Row>
              <Row>
                <Detail>{work.role}</Detail>
                <TooltipIcon type={work.roleType[0]} customStyle={{ marginLeft: "5px" }} />
              </Row>
            </>
          );
        })}

        <div
          style={{
            width: "100%",
            height: "1px",
            borderTop: "1px dotted #9CA3AF",
            marginTop: "40px"
          }}
        />
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "20px",
            marginTop: "6px"
          }}
        >
          Legend
        </div>
        <Row style={{ marginTop: "5px" }}>
          <TooltipIcon type="VERIFIED" noPopup={true} />
          <div style={{ marginLeft: "5px", fontFamily: "sans-serif", fontSize: "12px" }}>
            Verified: {TOOLTIP_TEXT.VERIFIED.description}
          </div>
        </Row>
        <Row style={{ marginTop: "5px" }}>
          <TooltipIcon type="DEMONSTRATED" noPopup={true} />
          <div style={{ marginLeft: "5px", fontFamily: "sans-serif", fontSize: "12px" }}>
            Demonstrated: Data endorsed by co-worker
          </div>
        </Row>
        <Row style={{ marginTop: "5px" }}>
          <TooltipIcon type="DECLARED" noPopup={true} />
          <div style={{ marginLeft: "5px", fontFamily: "sans-serif", fontSize: "12px" }}>
            Self-declared: Data entered by individual
          </div>
        </Row>
      </Page>
    </>
  );
};
