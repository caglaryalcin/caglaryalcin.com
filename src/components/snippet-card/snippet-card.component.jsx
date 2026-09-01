import React, { useContext } from 'react';
import {
  Title,
  Snippet,
  Description,
  SocialIconsContainer,
  SocialIcons,
  MainContainer,
  ImageContainer,
  IntroContainer,
} from './snippet-card.styles';

import CustomIcon from './../custom-icon/custom-icon.component';
import LinkedinLogo from '../../images/social/linkedin_light.png';
import GithubLogo from '../../images/social/github_light.png';
import xLogo from '../../images/social/x_light.png';
import blueskyLogo from '../../images/social/bluesky-light.png';
import LinkedinDarkLogo from '../../images/social/linkedin_dark.png';
import GithubDarkLogo from '../../images/social/github_dark.png';
import xDarkLogo from '../../images/social/x_dark.png';
import blueskyDarkLogo from '../../images/social/bluesky-dark.png';
import PP from './../../images/pp.webp';
import ThemeContext from '../../context/theme-context';

const SnippetCard = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <MainContainer>
      <IntroContainer>
        <Title>Hi, I'm Caglar.</Title>
        <Snippet>Architect Sys. Eng.</Snippet>
      </IntroContainer>
      <Description>
        I'm a self-improving Systems Engineer with experience in data center operations, virtualization, open source solutions, container orchestration platforms, system operations, privacy and security.
      </Description>
      <SocialIconsContainer aria-label='Social links'>
        <SocialIcons>
          <CustomIcon
            className={"linkedin"}
            targetUrl='https://www.linkedin.com/in/cglr/'
            imageSource={isDark ? LinkedinLogo : LinkedinDarkLogo}
            altDescription='LinkedIn profile'
          />
        </SocialIcons>
        <SocialIcons>
          <CustomIcon
            className={"github"}
            targetUrl='https://github.com/caglaryalcin'
            imageSource={isDark ? GithubLogo : GithubDarkLogo}
            altDescription='GitHub profile'
          />
        </SocialIcons>
        <SocialIcons>
          <CustomIcon
            className={"bluesky"}
            targetUrl='https://bsky.app/profile/caglaryalcin.com'
            imageSource={isDark ? blueskyLogo : blueskyDarkLogo}
            altDescription='Bluesky profile'
          />
        </SocialIcons>
        <SocialIcons>
          <CustomIcon
            className={"x"}
            targetUrl='https://x.com/syscglr'
            imageSource={isDark ? xLogo : xDarkLogo}
            altDescription='X profile'
          />
        </SocialIcons>
      </SocialIconsContainer>
      <ImageContainer>
        <img src={PP} alt='Portrait of Caglar Yalcin' />
      </ImageContainer>
    </MainContainer>
  );
};

export default SnippetCard;
