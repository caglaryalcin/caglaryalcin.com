import styled from 'styled-components';

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
`;

export const Description = styled.p``;

export const SocialIconsContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  display: flex;
  img {
    width: 27px;
    margin-right: 9px;
  }
  position: relative;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
    img {
      filter: drop-shadow(3px 3px 4px gray) ;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 700px;
`;
