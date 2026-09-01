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
import {
  HoverTypewriter,
  useHoverTypewriterInteraction,
} from '../hover-typewriter/hover-typewriter.component';

const biography =
  "I'm a self-improving Systems Engineer with experience in data center operations, virtualization, open source solutions, container orchestration platforms, system operations, privacy and security.";

const SnippetCard = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const { shouldType, onMouseEnter, onMouseLeave } =
    useHoverTypewriterInteraction();

  return (
    <MainContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <IntroContainer>
        <Title>Hi, I'm Caglar.</Title>
        <Snippet>Architect Sys. Eng.</Snippet>
      </IntroContainer>
      <Description>
        <span className='biography-copy' aria-hidden='true'>
          {biography}
        </span>
        {!shouldType && (
          <span className='biography-idle' aria-hidden='true'>
            <span className='react-rotating-text-cursor'>|</span>
          </span>
        )}
        {shouldType && (
          <span className='biography-animation' aria-hidden='true'>
            <HoverTypewriter text={biography} />
          </span>
        )}
        <span className='biography-static'>{biography}</span>
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
