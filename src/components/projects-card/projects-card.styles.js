import styled from "styled-components";

export const ProjectsSection = styled.section`
  margin-top: 40px;
  color: var(--text, #d8d3d0);
`;

export const ProjectsHeading = styled.h2`
  position: relative;
  margin: 0;
  padding: 10px 20px 12px;
  border-bottom: 1px solid var(--border, #3a3d3f);
  color: var(--text, #d8d3d0);
  font-size: clamp(1.3rem, 3vw, 1.55rem);
  font-weight: 700;
  letter-spacing: -0.03em;

  &::after {
    position: absolute;
    bottom: -1px;
    left: 20px;
    width: 54px;
    height: 3px;
    border-radius: 999px;
    background: var(--accent, #b85c5c);
    content: "";
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 18px;
  gap: 14px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectLogo = styled.div`
  display: grid;
  width: 58px;
  aspect-ratio: 1;
  float: right;
  place-items: center;
  margin: 0 0 10px 14px;
  border: 1px solid var(--border, #3a3d3f);
  border-radius: 12px;
  background: var(--surface-hover, #25292a);

  img {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 4px;
    border-radius: 10px;
    object-fit: contain;
  }

  @media (max-width: 420px) {
    width: 48px;
    margin-left: 10px;
  }
`;

export const Card = styled.article`
  display: flex;
  min-width: 0;
  min-height: 190px;
  flex-direction: column;
  padding: 18px;
  overflow: hidden;
  border: 1px solid var(--border, #3a3d3f);
  border-radius: 14px;
  background: var(--surface, #202324);
  color: var(--text, #d8d3d0);

  @media (max-width: 680px) {
    min-height: 0;
    padding: 16px;
  }
`;

export const CardContent = styled.div`
  display: flow-root;
  min-width: 0;
`;

export const CardTitle = styled.h3`
  margin: 0 0 7px;
  color: var(--text, #d8d3d0);
  font-size: clamp(0.98rem, 2vw, 1.12rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.25;
`;

export const CardDescription = styled.p`
  display: grid;
  position: relative;
  min-width: 0;
  min-height: 1.5em;
  margin: 0 0 14px;
  color: var(--muted, #a7a3a0);
  font-size: 0.84rem;
  letter-spacing: -0.015em;
  line-height: 1.5;
  overflow-wrap: break-word;
  white-space: normal;

  .project-description-copy {
    grid-area: 1 / 1;
    min-width: 0;
    visibility: ${({ $typing }) => ($typing ? "hidden" : "visible")};
  }

  .project-description-animation {
    display: block;
    grid-area: 1 / 1;
    min-width: 0;
    overflow-wrap: break-word;
    pointer-events: none;
    white-space: normal;
  }

  .project-description-static {
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
    .project-description-animation {
      display: none;
    }

    .project-description-copy {
      visibility: visible;
    }
  }
`;

export const Actions = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  align-items: center;
  margin-top: auto;
`;

const ActionLink = styled.a`
  display: inline-flex;
  min-height: 34px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 6px 9px;
  border: 1px solid var(--border, #3a3d3f);
  border-radius: 8px;
  color: var(--text, #d8d3d0);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1;
  text-decoration: none;

  svg {
    width: 15px;
    height: 15px;
    flex: 0 0 auto;
  }

  &:hover {
    color: var(--accent, #b85c5c);
  }

  &:focus-visible {
    color: var(--accent, #b85c5c);
    outline: 2px solid var(--accent, #b85c5c);
    outline-offset: 3px;
  }
`;

export const GithubLink = styled(ActionLink)``;

export const ExtensionLinks = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;
  margin-left: auto;
`;

export const ExtensionLink = styled(ActionLink)`
  width: 34px;
  min-width: 34px;
  padding: 6px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const DemoLink = styled(ActionLink)``;
