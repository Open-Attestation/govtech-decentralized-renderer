import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface GovTechCertificateTemplate extends Document {
  name: string;
  institute: string;
  recipient: {
    name: string;
    email?: string;
    nric?: string;
  };
  programme: {
    name: string;
    startDate: string;
    endDate: string;
  };
  additionalData: {
    certSignatories: {
      name: string;
      position: string;
      organisation: string;
      signature: string;
    }[];
  };
}

export const sampleCertificate: GovTechCertificateTemplate = {
  name: "Certificate of Achievement",
  institute: "Institute of John Doe",
  recipient: {
    name: "John Doe"
  },
  programme: {
    name: "GovTech Internship Programme",
    startDate: "12 Aug 2019",
    endDate: "29 Nov 2019"
  },
  additionalData: {
    certSignatories: [
      {
        name: "Evangeline Chua",
        position: "Chief People Officer",
        organisation: "GovTech Singapore",
        signature:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAABaCAIAAAAJsExNAAAEy0lEQVR42u2aPVbrOhRGnY4RQE9BB9TMgA6YBTOAir8KZsAsgI4ZUAMdBT3p6NLx/J7e0jpIsqw4tuP73b2LLIhtRTralo5kz25vbxeLRQUgwezq6ur8/Hzd1QDogXp0/lfoy8vLddcEoAeur68RGnRAaJACoUEKhAYpEBqkQGiQAqFBCoQGKRAapEBokAKhQQqEBikQGqRAaJACoUEKhAYpEBqkQGiQAqFBCoQGKRAapEBokAKhQQqEHpvHx8fX11f398XFxWw2W3eNpOgi9NfX1/39ffz9/v7+9vb27u7uX9tJPz8/7+/vn5+fXtk4Jgg9KH0K7Tk5Odnb21t308bm7e3t4eGh6aiPydSEttUWmKgHEbr6b2Q6Pj5ed+vGI29zNeGbHKF/CX16erq1tRV/X024C3unzjRubm78v2dnZxsbG+7vxWLx/PxcD8mTjQZCNwpdRV3rp1Q/z9qR25bjJQjOTJ7jLami26bz5bbmwfRSn393d5dsb2tAfAkfHx9xymHD7vJvO8zX1fBnlsQn+Gn3o5mEPugsiwtLea8Fd0XyNrZhd2UeHh76O78vehY6aJs/2k3o+tO3359Wd1IwuduorXJ5U3ZrW5TMeq3x1e8ROiYpdMatpeKTDEWM65eBhK6vtX/HsbX0npr2L7TtXV/dDkIvRTwVdLi8aSSuY5SPfpMZdXfu7OwEcieFbq12eXwKy6ybXH8OIXS+nKOjo0yoV6d/oZNzdzeh3ZeBLvGo3+Plsbs29JmhN78otFGKhW4a4LvFx97bwY6hrWRTtmCr3U3oOPPxrbPzW7Lw1Zmu0PbMZDIwxOVxdlG+Zspv/iQnX1dgkw3lDUya6vpiPp/X5dhMOtPkXoQOCmk6NNBidLopR1OHdRC6/HJ7N7qm+TG7cGaMl2Ie99N5oe0YVt7ApdKAzGlDCF2SBPa4H9+/0Mmjf4rQQQn1Mjw5XRaSzCXGEdp+U08OLvFIpk8IvdK2nW3wNIUOZpiSPK8uqv5Mjt/xT+eFtjVZReikYZ2Fbu21DinHQIz0YCW5lHl6emrdZ23SYqn+XkroyiwNPfmdOF9UHY3NzU0/2AQjtAtybImtid8HqBpELxQ6ueRtXRQGzSzvtYy1wQDhW1eZrfcJ5dBNBENa65PhSQkd13aV5aAjubvii41voaXikx+h8wUmK+8Go/JC8sNw+Vbj6oz0clJyp7bkSZg7OrLQQW1bn1q3BiS/bVdSwrJClz+pSZ7pmlzea615Rd7piQqdf33UzlZu6pnP5xPMoeMOKFmyuA2yl5cX2211HQ4ODmwSUjUIXf1+MuzWo9/f376GHV4iCNID95QnuacenFmZO7Cw10oS5eDRd1N8VoQX/BNk3usYsw5WMjqoEIROkHnuNRD5lGOcOmiA0AnsEm2cyGSE/tveLF8RhA4JHkmM8xJznF9Wg71gqQ1CgxQIDVIgNEiB0CAFQoMUCA1SIDRIgdAgBUKDFAgNUiA0SIHQIAVCgxQIDVIgNEiB0CAFQoMUCA1SIDRIgdAgBUKDFAgNUiA0SIHQIAVCgxQIDVIgNEiB0CAFQoMUCA1SIDRIgdAgBUKDFAgNUiA0SIHQIAVCgxQIDVIgNEiB0CAFQoMUCA1S/C/0uqsB0Bv/AEwL5dNeBrk9AAAAAElFTkSuQmCC"
      }
    ]
  },
  $template: {
    name: "custom",
    type: "EMBEDDED_RENDERER",
    url: "http://localhost:3000"
  }
};
