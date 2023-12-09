import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  margin-bottom: -60px;
`;

export const Title = styled.h1`
  font-size: 38px;
`;

export const Snippet = styled.h3`
  font-weight: 600;
  font-size: 23px;
  line-height: 1.5em;

  @media (max-width: 768px) {
    font-size: 20px;
    width: 100%;
  }
`;

export const Description = styled.div`
  // Mobile
  @media (max-width: 768px) {
    width: 150%;
    margin: 0 auto;
    padding-bottom: 1.5rem;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
`;

export const SocialIcons = styled.div`
  display: flex;
  margin-bottom: 1.75rem;
  height: 30px;
  width: 36px;
  img {
    width: 27px;
  }

  &:hover {
    img {
      filter: invert(51%) sepia(18%) saturate(1180%) hue-rotate(313deg)
        brightness(84%) contrast(101%);
    }
  }
`;

export const ImageContainer = styled.div`
  width: 700px;
  @media (max-width: 768px) {
    width: 270%;
    margin: 0 auto;
  }
`;
