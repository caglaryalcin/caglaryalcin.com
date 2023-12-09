import styled, { keyframes } from "styled-components";
import "typeface-ubuntu";

const blinkCursor = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
`;

export const BlinkingCursor = styled.span`
  animation: ${blinkCursor} 0.9s steps(1, end) infinite;
  font-weight: 2;
  transform: scaleX(0.8);
  font-size: 15px;
`;

const PSblinkCursor = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
`;

export const PSBlinkingCursor = styled.span`
  animation: ${PSblinkCursor} 1s steps(1, end) infinite;
  display: inline-block;
  font-size: 10px;
  transform: rotate(90deg);
  vertical-align: -3px;
`;

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
  background-color: #300a24;
  color: #7dd033;
  font-family: "Ubuntu", "Cascadia Code";
  font-size: 17px;
  border-radius: 3px;
  padding-left: 1px;
  padding-right: 1px;
  padding-bottom: 2px;
`;
export const Bash2 = styled.span`
  color: #d8d6d0;
  font-family: "Ubuntu", "Cascadia Code";
  font-size: 17px;
  border-radius: 3px;
  padding: 2px;
`;

export const Bash3 = styled.span`
  color: #6d97c5;
  font-family: "Ubuntu", "Cascadia Code";
  font-size: 17px;
  border-radius: 3px;
  padding: 2px;
`;

export const PsComponent = styled.span`
  background-color: #012456;
  color: #e2dfd7;
  font-family: "Consolas", monospace;
  font-size: 17px;
  border-radius: 3px;
  padding-left: 2px;
  padding-right: 5px;
  padding-bottom: 1px;
`;
