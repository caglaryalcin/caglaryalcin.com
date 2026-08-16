import styled, { keyframes } from "styled-components";
import "@fontsource/cascadia-code";
import "@fontsource/source-code-pro";

export const SectionTitle = styled.h2`
  position: relative;
  font-weight: bold;
  font-size: clamp(1.3rem, 3vw, 1.55rem);
  margin: 52px 0 24px;
  padding: 10px 20px 12px;
  border-bottom: 1px solid var(--border);

  &::after {
    position: absolute;
    bottom: -1px;
    left: 20px;
    width: 54px;
    height: 3px;
    border-radius: 999px;
    background: var(--accent);
    content: "";
  }

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
  color: var(--muted);
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

const terminalCursorBlink = keyframes`
  0%, 45% { opacity: 1; }
  46%, 100% { opacity: 0; }
`;

export const TerminalPrompt = styled.code`
  --terminal-background: ${({ $shell }) =>
    $shell === "powershell" ? "#012456" : "#57003F"};
  --terminal-border: ${({ $shell }) =>
    $shell === "powershell" ? "#123d70" : "#5f234c"};
  --terminal-user: ${({ $shell }) =>
    $shell === "powershell" ? "#f3f3f3" : "#7DDD32"};
  --terminal-path: ${({ $shell }) =>
    $shell === "powershell" ? "#f3f3f3" : "#729fcf"};

  display: inline-flex;
  position: relative;
  top: -2px;
  align-items: center;
  box-sizing: border-box;
  max-width: 100%;
  margin: 0 0.12em;
  overflow: hidden;
  vertical-align: -0.18em;
  white-space: nowrap;
  border: 1px solid var(--terminal-border);
  border-radius: 5px;
  padding: 0.14em 0.42em 0.18em;
  background: var(--terminal-background);
  color: #f3f3f3;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 7%), 0 1px 2px rgb(0 0 0 / 18%);
  font-family: "Cascadia Code", "Source Code Pro", monospace;
  font-size: 0.86em;
  font-weight: 500;
  line-height: 1.38;

  &::before,
  &::after {
    content: none;
  }

  @media (max-width: 768px) {
    max-width: calc(100vw - 3rem);
    font-size: 0.82em;
  }
`;

export const TerminalUser = styled.span`
  color: var(--terminal-user);
  font-weight: 400;
`;

export const TerminalPath = styled.span`
  color: var(--terminal-path);
`;

export const TerminalSymbol = styled.span`
  color: #f3f3f3;
`;

export const TerminalCursor = styled.span`
  flex: none;
  width: ${({ $shell }) => ($shell === "powershell" ? "0.58em" : "0.5em")};
  height: ${({ $shell }) => ($shell === "powershell" ? "0.12em" : "0.94em")};
  align-self: ${({ $shell }) =>
    $shell === "powershell" ? "flex-end" : "center"};
  margin-bottom: ${({ $shell }) =>
    $shell === "powershell" ? "0.18em" : "0"};
  border-radius: 1px;
  background: ${({ $shell }) =>
    $shell === "powershell" ? "#fedba9" : "#f3f3f3"};
  animation: ${terminalCursorBlink} 1s steps(1, end) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;
