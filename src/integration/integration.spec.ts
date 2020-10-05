import { Selector } from "testcafe";
import { sampleCertificate } from "../templates/sample";
import percySnapshot from "@percy/testcafe";

const document = { ...sampleCertificate };
fixture("GovTech Internship Certificate of Achievement").page`http://localhost:3000`;

const CustomTemplate = Selector("#custom-template");

test("Custom certificate is rendered correctly", async test => {
  await test.eval(
    () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore can't find a way to have this working on test cafe
      window.openAttestation({
        type: "RENDER_DOCUMENT",
        payload: {
          document
        }
      });
    },
    {
      dependencies: {
        document
      }
    }
  );
  await test.expect(CustomTemplate.visible).ok();
  await test.expect(CustomTemplate.textContent).contains("Certificate of Completion");

  // take a snapshot
  await percySnapshot(test, "Rendered custom template");
});
