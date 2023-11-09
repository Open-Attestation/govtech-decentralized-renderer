import styled from "@emotion/styled";
import "./font/font.css";

export const mediaQueries: Record<string, string> = {
  sm: `@media (min-width: ${640}px)`,
  md: `@media (min-width: ${768}px)`,
  lg: `@media (min-width: ${1024}px)`,
  xl: `@media (min-width: ${1280}px)`,
  "2xl": `@media (min-width: ${1536}px)`,
  print: `@media print`
};

export const Page = styled.div`
  margin: auto;
  border: 1px solid #6b7280;
  box-sizing: border-box;
  padding: 10px 10px;
  position: relative;
  font-size: 16px;
  line-height: 1.5;
  font-family: sans-serif;
  padding: 15mm;
  width: 21cm;

  ${mediaQueries["print"]} {
    width: 21cm;
    min-height: 27cm;
    padding-bottom: 2mm;
    border: none;
    page-break-before: always;
  }
`;

export const Name = styled.div`
  color: var(--off-black, #252525);
  text-align: left;
  font-family: PT Serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Detail = styled.div<{ bold?: boolean }>`
  color: var(--off-black, #252525);
  font-family: PT Serif;
  font-size: 16px;
  font-style: normal;
  font-weight: ${props => (props.bold ? "700" : "400")};
  line-height: 150%;
`;

export const Ellipse = styled.div`
  width: 6px;
  height: 6px;
  background-color: #252525;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #252525;
`;

export const Section = styled.div`
  color: var(--off-black, #252525);
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
  padding-top: 15px;
  padding-bottom: 15px;

  font-family: PT Serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
`;
