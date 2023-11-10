import { v2 } from "@govtechsg/decentralized-renderer-react-components";

export type VERIFICATION_TYPE = "DECLARED" | "DEMONSTRATED" | "VERIFIED";

export interface Resume extends v2.OpenAttestationDocument {
  name: string;
  mobileNumber: string;
  email: string;
  address: string;
  skills: {
    category: string;
    values: {
      name: string;
      type: VERIFICATION_TYPE[];
    }[];
  }[];
  education: {
    name: string;
    type: VERIFICATION_TYPE[];
    institution: string;
    startDate: string;
    endDate: string;
  }[];
  work: {
    companyName: string;
    companyType: VERIFICATION_TYPE[];
    startDate: string;
    endDate: string;
    role: string;
    roleType: VERIFICATION_TYPE[];
  }[];
}

export const sampleResume: Resume = {
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
  name: "Tan Yi Ling Freya",
  mobileNumber: "9823 1234",
  email: "freya_tan@gmail.com",
  address: "Blk 223 Bedok St 21, #06-23 S453234",
  skills: [
    {
      category: "Project Management",
      values: [
        {
          name: "Project Planning and Scheduling",
          type: ["DECLARED"]
        },
        {
          name: "Risk Management",
          type: ["DECLARED"]
        },
        {
          name: "Budget Management",
          type: ["DECLARED"]
        },
        {
          name: "Team Leadership",
          type: ["VERIFIED", "DEMONSTRATED"]
        },
        {
          name: "Stakeholder Communication",
          type: ["VERIFIED"]
        },
        {
          name: "Resource Allocation",
          type: ["DEMONSTRATED"]
        }
      ]
    },
    {
      category: "Software Development",
      values: [
        {
          name: "React and Javascript",
          type: ["VERIFIED", "DEMONSTRATED"]
        },
        {
          name: "Version Control/Git",
          type: ["DECLARED"]
        },
        {
          name: "Python",
          type: ["DEMONSTRATED"]
        },
        {
          name: "Database Management",
          type: ["VERIFIED", "DEMONSTRATED"]
        },
        {
          name: "Process Improvement",
          type: ["VERIFIED"]
        },
        {
          name: "Software Testing",
          type: ["DEMONSTRATED"]
        }
      ]
    }
  ],
  education: [
    {
      name: "Bachelor of Science in Computer Science",
      type: ["DECLARED"],
      institution: "Massachusetts Institute of Technology",
      startDate: "2014",
      endDate: "2018"
    },
    {
      name: "Diploma of E-commerce and Business",
      type: ["VERIFIED"],
      institution: "Temasek Polytechnic",
      startDate: "2011",
      endDate: "2014"
    }
  ],
  work: [
    {
      companyName: "ACME Industries Pte Ltd",
      companyType: ["VERIFIED"],
      startDate: "2020",
      endDate: "2023",
      role: "Associate Project Manager",
      roleType: ["DEMONSTRATED"]
    },
    {
      companyName: "DEF Software Solutions",
      companyType: ["DECLARED"],
      startDate: "2018",
      endDate: "2020",
      role: "Junior Software Developer",
      roleType: ["DECLARED"]
    }
  ]
};
