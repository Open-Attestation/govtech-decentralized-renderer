import styled from "@emotion/styled";

export const mediaQueries: Record<string, string> = {
  sm: `@media (min-width: ${640}px)`,
  md: `@media (min-width: ${768}px)`,
  lg: `@media (min-width: ${1024}px)`,
  xl: `@media (min-width: ${1280}px)`,
  "2xl": `@media (min-width: ${1536}px)`,
  print: `@media print`
};

export const Page = styled.div`
  background-color: #ffffff;
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

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Detail = styled.div<{ bold?: boolean }>`
  color: #4a5054;
  font-family: "Work Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: ${props => (props.bold ? "500" : "400")};
  line-height: 20px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ededed;
`;

export const Section = styled.div`
  color: #1d2225;
  text-align: left;
  font-family: Work Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  padding-bottom: 10px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 5fr 4fr;
`;

export const Title = styled.div`
  color: #1d2225;
  text-align: left;
  font-family: Work Sans;
  font-weight: 600;
  font-size: 40px;
  font-style: normal;
  line-height: 130%;
`;

export const LegendBox = styled.div`
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  gap: 4px;
  border-radius: 8px;
  border: 1px solid #3972d5;
  background: #f4f7fa;
`;
