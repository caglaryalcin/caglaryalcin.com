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

export const SocialIcons = styled.div`
  display: flex;
  img {
    width: 27px;
    margin-right: 9px;
  }
  position: relative;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
    img {
      filter: drop-shadow(1px 1px 5px gray) ;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 700px;
`;
