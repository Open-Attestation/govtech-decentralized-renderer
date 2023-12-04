import { v2 } from "@govtechsg/decentralized-renderer-react-components";

export type VERIFICATION_TYPE_V2 = "GOVERNMENT" | "DECLARED" | "CERTIFIED" | "DEMONSTRATED";
export interface ResumeV2 extends v2.OpenAttestationDocument {
  name: string;
  identifier: string;
  issuedBy: string;
  issueDate: string;
  work: {
    companyName: string;
    companyType: VERIFICATION_TYPE_V2;
    startDate: string;
    endDate: string;
    role: string;
    roleType: VERIFICATION_TYPE_V2;
  }[];
  education: {
    qualification: string;
    qualificationType: VERIFICATION_TYPE_V2;
    institution: string;
    institutionType: VERIFICATION_TYPE_V2;
    startDate: string;
    endDate: string;
  }[];
  professionalCredentials: {
    qualification: string;
    qualificationType: VERIFICATION_TYPE_V2;
    institution: string;
    institutionType: VERIFICATION_TYPE_V2;
    obtainedDate: string;
  }[];
  skills: {
    category: string;
    values: {
      name: string;
      type: VERIFICATION_TYPE_V2[];
    }[];
  }[];
}

export const sampleResumeV2: ResumeV2 = {
  issuers: [
    {
      name: "Sample Resume"
    }
  ],
  $template: {
    name: "RESUME_DEMO",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3010/"
  },
  name: "Jenny Tan Li Shi",
  identifier: "S88XXXXXX",
  issuedBy: "myskillsfuture.gov.sg",
  issueDate: "10 December 2023",
  work: [
    {
      companyName: "ABC Company",
      companyType: "GOVERNMENT",
      startDate: "Jan 2015",
      endDate: "Present",
      role: "Marketing Executive",
      roleType: "GOVERNMENT"
    },
    {
      companyName: "Mos Burger",
      companyType: "GOVERNMENT",
      startDate: "Aug 2010",
      endDate: "Dec 2014",
      role: "Marketing Executive",
      roleType: "DECLARED"
    }
  ],
  education: [
    {
      qualification: "Bachelor of Arts in Marketing",
      qualificationType: "GOVERNMENT",
      institution: "Singapore Institute of Management",
      institutionType: "GOVERNMENT",
      startDate: "2007",
      endDate: "2010"
    },
    {
      qualification: "Diploma in Marketing",
      qualificationType: "GOVERNMENT",
      institution: "Ngee Ann Polytechnic",
      institutionType: "GOVERNMENT",
      startDate: "2004",
      endDate: "2007"
    }
  ],
  professionalCredentials: [
    {
      qualification: "Marketing Certificate",
      qualificationType: "GOVERNMENT",
      institution: "NATC Institute Pte Ltd",
      institutionType: "GOVERNMENT",
      obtainedDate: "2007"
    },
    {
      qualification: "Diploma in Marketing",
      qualificationType: "GOVERNMENT",
      institution: "SOQ International Academy Pte Ltd",
      institutionType: "GOVERNMENT",
      obtainedDate: "2014"
    }
  ],
  skills: [
    {
      category: "Marketing",
      values: [
        {
          name: "Communications Channel Management",
          type: ["CERTIFIED", "DEMONSTRATED"]
        },
        {
          name: "Brand Campaign Management",
          type: ["CERTIFIED", "DEMONSTRATED"]
        },
        {
          name: "Market Research",
          type: ["DEMONSTRATED"]
        },
        {
          name: "Manual and Digital Drawings Production",
          type: ["CERTIFIED"]
        },
        {
          name: "Data Analytics",
          type: ["DECLARED"]
        },
        {
          name: "Digital Marketing",
          type: ["CERTIFIED", "DEMONSTRATED"]
        }
      ]
    }
  ]
};
