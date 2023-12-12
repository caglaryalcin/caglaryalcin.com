import styled, { keyframes } from "styled-components";
import "typeface-ubuntu";

export const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 40px;
  padding: 10px 20px;
  border-bottom: 4px solid #413f3f;
  @media (max-width: 768px) {
    font-size: 21px;
  }
`;

export const SubTitle = styled.span`
  font-weight: bold;
`;

export const ItemList = styled.ul`
  margin-top: 5px;
  list-style: none;
  padding-left: 0;
  margin-left: 0;
`;

export const Edulist = styled.ul`
  margin-top: 15px;
  list-style: none;
  padding-left: 0;
  margin-left: 0;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const StackList = styled.ul`
  margin-top: 5px;
  list-style: square inside;
  padding-left: 0;
  margin-left: 0;
  line-height: 1.8;
`;

export const Item = styled.li``;

export const Techs = styled.li`
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Date = styled.em`
  color: #888;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ItalicText = styled.span`
  font-style: italic;
`;

export const Tech = styled.span`
  font-weight: bold;
  font-size: 17px;
  border-radius: 3px;
  padding: 2px 7px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Bash = styled.span`
  @font-face {
    font-family: "Ubuntu Mono";
    src: url("./path-to-font/UbuntuMono-Regular.ttf") format("truetype");
  }

  background: #57003f;
  color: #7ddd32;
  font-size: 17px;
  font-family: "Ubuntu Mono", "Cascadia Code";
  border-radius: 3px;
  padding: 0 3px 1px;
  @media (max-width: 768px) {
    font-size: 16px;
    padding-left: 1px;
  }
`;

export const Bash2 = styled.span`
  color: #d8d6d0;
  font-family: "Ubuntu Mono", "Cascadia Code";
  font-size: 17px;
  padding: 2px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Bash3 = styled.span`
  color: #6d97c5;
  font-family: "Ubuntu Mono", "Cascadia Code";
  font-size: 17px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
}`;

const BashblinkCursor = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
`;

export const BashBlinkingCursor = styled.span`
  animation: ${BashblinkCursor} 0.9s steps(1, end) infinite;
  font-weight: 2;
  transform: scaleX(0.8);
  font-size: 15px;
`;

export const PsComponent = styled.span`
  background: #012456;
  color: #e2dfd7;
  font: 17px "Consolas";
  border-radius: 3px;
  padding-bottom: 1px;
  padding-right: 2px;
  padding-left: 4px;

  @media (max-width: 768px) {
    font-size: 16px;
    display: inline-block;
  }
`;

const blinkAnimation = keyframes`
  50% { opacity: 0; }
`;

export const PSBlinkingCursor = styled.span`
  width: 10px;
  height: 4px;
  margin-left: 2px;
  background: #fedba9;
  display: inline-block;
  animation: ${blinkAnimation} 1s steps(1, start) 0s infinite;
`;