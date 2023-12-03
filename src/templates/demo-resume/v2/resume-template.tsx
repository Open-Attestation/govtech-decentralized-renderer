import { ObfuscatableValue, TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { ResumeV2, VERIFICATION_TYPE_V2 } from "./types";
import React, { FunctionComponent, useState } from "react";
import { Detail, Divider, Grid, LegendBox, Page, Row, Section, Title } from "./styled-components";
import { SimplePrivacyFilterBanner } from "../privacy-banner";
import { TooltipIcon } from "../tooltip";
import skillsFutureLogo from "./images/skillsfuture-logo.svg";
import governmentIcon from "./images/gov-data.svg";
import declaredIcon from "./images/self-declared.svg";
import certifiedIcon from "./images/certified.svg";
import demonstratedIcon from "./images/demonstrated.svg";

const ICON_MAP = {
  GOVERNMENT: governmentIcon,
  DECLARED: declaredIcon,
  CERTIFIED: certifiedIcon,
  DEMONSTRATED: demonstratedIcon
};

export const TOOLTIP_TEXT = {
  GOVERNMENT: { title: "Government Data", description: "Information from Singapore Government systems" },
  DECLARED: { title: "Self-declared", description: "Data entered by individual" },
  CERTIFIED: { title: "Certified", description: "Data from SkillsFuture accredited courses" },
  DEMONSTRATED: { title: "Demonstrated", description: "Data endorsed by employers" }
};

const downloadJSON = (resume: any): void => {
  const jsonData = JSON.stringify(resume, null, 2);
  const blob = new Blob([jsonData], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "document.trustdoc";
  a.click();
  URL.revokeObjectURL(url);
};

const LegendRow: FunctionComponent<{ type: VERIFICATION_TYPE_V2 }> = ({ type }) => (
  <Row>
    <TooltipIcon text={TOOLTIP_TEXT[type]} noPopup={true} image={ICON_MAP[type]} />
    <div style={{ marginLeft: "5px", fontFamily: "Inter", fontSize: "12px", color: "#252525" }}>
      {`${TOOLTIP_TEXT[type].title}: ${TOOLTIP_TEXT[type].description}`}
    </div>
  </Row>
);

export const ResumeV2Template: FunctionComponent<TemplateProps<ResumeV2>> = ({
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
        <img src={skillsFutureLogo}></img>
        <Title>Skill Passport</Title>
        <Divider />
        <Row style={{ paddingTop: "25px", justifyContent: "space-between" }}>
          <Section style={{ paddingBottom: "0px" }}>{document.name}</Section>
          <Row style={{ gap: 5, alignItems: "end" }}>
            <Detail style={{ display: "inline" }}>Issued by: </Detail>
            <Detail style={{ display: "inline", fontWeight: 600 }} bold>
              {document.issuedBy}
            </Detail>
          </Row>
        </Row>
        <Row style={{ paddingBottom: "25px", justifyContent: "space-between" }}>
          <Detail>{document.identifier}</Detail>
          <Row style={{ gap: 5 }}>
            <Detail style={{ display: "inline" }}>Issue date: </Detail>
            <Detail style={{ display: "inline", fontWeight: 600 }} bold>
              {document.issueDate}
            </Detail>
          </Row>
        </Row>
        <Divider />
        <Section style={{ paddingTop: "15px" }}>Work History</Section>
        {document.work.map(work => {
          return (
            <Grid>
              <Row style={{ marginTop: "5px", gap: "5px" }}>
                <TooltipIcon text={TOOLTIP_TEXT[work.companyType]} image={ICON_MAP[work.companyType]} />
                <Detail style={{ fontSize: "16px" }} bold>
                  {work.companyName},
                </Detail>
                <Detail>
                  {work.startDate}-{work.endDate}
                </Detail>
              </Row>
              <Row style={{ marginTop: "5px", gap: "5px" }}>
                <TooltipIcon
                  text={TOOLTIP_TEXT[work.roleType]}
                  customStyle={{ marginLeft: "5px" }}
                  image={ICON_MAP[work.roleType]}
                />
                <Detail>{work.role}</Detail>
              </Row>
            </Grid>
          );
        })}
        <Section style={{ paddingTop: "30px" }}>Education</Section>
        {document.education.map(education => {
          return (
            <Grid>
              <Row style={{ marginTop: "5px", gap: "5px" }}>
                <TooltipIcon
                  text={TOOLTIP_TEXT[education.qualificationType]}
                  image={ICON_MAP[education.qualificationType]}
                />
                <Detail style={{ fontSize: "16px" }} bold>
                  {education.qualification},
                </Detail>
                <Detail>
                  {education.startDate}-{education.endDate}
                </Detail>
              </Row>
              <Row style={{ marginTop: "5px", gap: "5px" }}>
                <TooltipIcon
                  text={TOOLTIP_TEXT[education.institutionType]}
                  customStyle={{ marginLeft: "5px" }}
                  image={ICON_MAP[education.institutionType]}
                />
                <Detail>{education.institution}</Detail>
              </Row>
            </Grid>
          );
        })}
        <Section style={{ paddingTop: "30px" }}>Profressional Credentials</Section>
        {document.professionalCredentials.map(credential => {
          return (
            <Grid>
              <Row style={{ marginTop: "5px", gap: "5px" }}>
                <TooltipIcon
                  text={TOOLTIP_TEXT[credential.qualificationType]}
                  image={ICON_MAP[credential.qualificationType]}
                />
                <Detail style={{ fontSize: "16px" }} bold>
                  {credential.qualification},
                </Detail>
                <Detail>{credential.obtainedDate}</Detail>
              </Row>
              <Row style={{ marginTop: "5px", gap: "5px" }}>
                <TooltipIcon
                  text={TOOLTIP_TEXT[credential.institutionType]}
                  customStyle={{ marginLeft: "5px" }}
                  image={ICON_MAP[credential.institutionType]}
                />
                <Detail>{credential.institution}</Detail>
              </Row>
            </Grid>
          );
        })}
        <LegendBox style={{ marginTop: "25px", marginBottom: "30px" }}>
          <Detail style={{ fontFamily: "Inter", fontWeight: 600, color: "#252525" }}>Legend</Detail>
          <LegendRow type="GOVERNMENT" />
          <LegendRow type="DECLARED" />
        </LegendBox>
        <Divider />
        <Section style={{ paddingTop: "15px" }}>Skills</Section>
        {document.skills.map((skill, skillIndex) => {
          const skillsInCategory = skill.values;
          if (skill.values.filter(skill => skill.name !== undefined).length === 0) {
            return <></>;
          }
          return (
            <>
              <Detail style={{ marginBottom: "5px", marginTop: "5px", fontSize: "16px", color: "#252525" }} bold>
                {skill.category}
              </Detail>
              <Grid>
                {skillsInCategory.map((value, valueIndex) => (
                  <>
                    {value.name && (
                      <Row
                        style={{
                          width: "100%",
                          fontFamily: "Work Sans",
                          fontSize: "14px",
                          whiteSpace: "nowrap",
                          color: "#4a5054"
                        }}
                      >
                        {value.type.map((type, typeIndex) => {
                          if (value.type.length === 1) {
                            return (
                              <>
                                <TooltipIcon
                                  key={`${value.name}${typeIndex}`}
                                  text={TOOLTIP_TEXT[type]}
                                  customStyle={{ marginRight: "5px", visibility: "hidden" }}
                                  noPopup={true}
                                  image={ICON_MAP[type]}
                                />{" "}
                                <TooltipIcon
                                  key={`${value.name}${typeIndex}`}
                                  text={TOOLTIP_TEXT[type]}
                                  customStyle={{ marginRight: "5px" }}
                                  image={ICON_MAP[type]}
                                />
                              </>
                            );
                          } else {
                            return (
                              <TooltipIcon
                                key={`${value.name}${typeIndex}`}
                                text={TOOLTIP_TEXT[type]}
                                customStyle={{ marginRight: "5px" }}
                                image={ICON_MAP[type]}
                              />
                            );
                          }
                        })}
                        <ObfuscatableValue
                          value={value.name}
                          editable={editable}
                          onObfuscationRequested={() =>
                            handleObfuscation(`skills[${skillIndex}].values[${valueIndex}].name`)
                          }
                        />
                      </Row>
                    )}
                  </>
                ))}
              </Grid>
            </>
          );
        })}
        <LegendBox style={{ marginTop: "25px", marginBottom: "25px" }}>
          <Detail style={{ fontFamily: "Inter", fontWeight: 600, color: "#252525" }}>Legend</Detail>
          <LegendRow type="CERTIFIED" />
          <LegendRow type="DEMONSTRATED" />
          <LegendRow type="DECLARED" />
        </LegendBox>
      </Page>
    </>
  );
};
