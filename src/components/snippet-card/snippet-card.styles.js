import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
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
