import styled, { keyframes } from "styled-components";

const clickPulse = keyframes`
  0%, 100% {
    opacity: 0.35;
    transform: scale(0.75);
  }

  50% {
    opacity: 0;
    transform: scale(1.5);
  }
`;

const mouseClick = keyframes`
  0%, 35%, 100% {
    transform: translateY(0) scale(1);
  }

  48% {
    transform: translateY(2px) scale(0.92);
  }
`;

export const MainContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-areas:
    "intro image"
    "description image"
    "social image";
  grid-template-columns: minmax(0, 1fr) minmax(170px, 220px);
  column-gap: clamp(24px, 5vw, 56px);
  align-items: start;
  margin-bottom: 20px;

  @media (max-width: 620px) {
    grid-template-areas:
      "intro image"
      "description description"
      "social social";
    grid-template-columns: minmax(0, 1fr) 112px;
    column-gap: 14px;
  }
`;

export const IntroContainer = styled.div`
  grid-area: intro;
`;

export const Title = styled.h1`
  margin-bottom: 1.1rem;
  font-size: clamp(2rem, 5vw, 2.4rem);
`;

export const ClickCue = styled.div.attrs(({ $x, $y }) => ({
  style: {
    left: `${$x}px`,
    top: `${$y}px`,
  },
}))`
  position: fixed;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  color: var(--text);
  background: var(--background);
  border: 1px solid var(--accent);
  border-radius: 999px;
  box-shadow: 0 8px 24px rgb(0 0 0 / 18%);
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.02em;
  pointer-events: none;
  transform: translate(14px, 14px);
  user-select: none;

  .click-cue-mouse {
    position: relative;
    width: 14px;
    height: 20px;
    border: 1.5px solid currentColor;
    border-radius: 8px;
    animation: ${mouseClick} 1.25s ease-in-out infinite;

    &::before {
      position: absolute;
      top: 3px;
      left: 50%;
      width: 2px;
      height: 4px;
      background: var(--accent);
      border-radius: 2px;
      content: "";
      transform: translateX(-50%);
    }

    &::after {
      position: absolute;
      inset: -5px;
      border: 1px solid var(--accent);
      border-radius: 50%;
      content: "";
      animation: ${clickPulse} 1.25s ease-out infinite;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export const Snippet = styled.h3`
  font-weight: 600;
  font-size: 23px;
  line-height: 1.5em;
  /* Mobile */
  @media (max-width: 768px) {
    font-size: 20px;
    width: 100%;
  }
`;

export const Description = styled.div`
  display: grid;
  position: relative;
  caret-color: transparent;
  grid-area: description;
  min-width: 0;
  max-width: 650px;
  padding-bottom: 22px;
  overflow-wrap: break-word;
  white-space: normal;

  .biography-copy,
  .biography-idle,
  .biography-animation {
    grid-area: 1 / 1;
    min-width: 0;
  }

  .biography-copy {
    visibility: hidden;
  }

  .biography-idle {
    display: block;
    pointer-events: none;
  }

  .biography-animation {
    display: block;
    overflow-wrap: break-word;
    pointer-events: none;
    white-space: normal;
  }

  .biography-static {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  @media (prefers-reduced-motion: reduce) {
    .biography-animation {
      display: none;
    }
  }
`;

export const SocialIconsContainer = styled.nav`
  grid-area: social;
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 12px;
  caret-color: transparent;
  user-select: none;
`;

export const SocialIcons = styled.div`
  display: flex;
  margin-bottom: 1.75rem;
  height: 30px;
  width: 28px;
  img {
    width: 27px;
    margin: 0;
  }

  &:hover {
    img {
      filter: invert(51%) sepia(18%) saturate(1180%) hue-rotate(313deg)
        brightness(84%) contrast(101%);
    }
  }
`;

export const ImageContainer = styled.div`
  grid-area: image;
  width: 100%;
  max-width: 220px;
  justify-self: end;
  align-self: start;

  img {
    display: block;
    width: 100%;
    margin: 0;
  }

  @media (max-width: 620px) {
    max-width: 112px;
  }
`;
