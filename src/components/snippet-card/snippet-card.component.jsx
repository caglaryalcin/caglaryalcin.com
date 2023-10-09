import React from 'react';
import {
  Title,
  Snippet,
  Description,
  SocialIconsContainer,
  SocialIcons,
  MainContainer,
  ImageContainer
} from './snippet-card.styles';

import CustomIcon from './../custom-icon/custom-icon.component';
import CustomLink from './../custom-link/custom-link.component';
import LinkedinLogo from '../../images/social/linkedin_light.png';
import GithubLogo from '../../images/social/github_light.png';
import TwitterLogo from '../../images/social/twitter_light.png';
import PP from './../../images/pp.png';
import ReactRotatingText from 'react-rotating-text';

const SnippetCard = () => {
  return (
    <MainContainer>
      <div>
        <Title>Hi, I'm Caglar.<CustomLink></CustomLink></Title>
        <Snippet>System Engineer at <a href="https://intertech.com.tr" target="_blank" rel="noopener noreferrer">InterTech</a></Snippet>
        <Description>
          I'm a continuous self-improving System Engineer with experience in data center operations, virtualization, open-source solutions, system operations, privacy and security.<br />
          I <b><ReactRotatingText items={['love free and open-source software (FOSS).', 'love privacy.', 'love security.', 'love self hosted platforms.', 'love writing scripts.', 'love Open Systems Interconnection (OSI).']} /></b>
        </Description>
        <SocialIconsContainer>
          <SocialIcons>
            <CustomIcon
              className={"linkedin"}
              targetUrl='https://www.linkedin.com/in/cglr/'
              imageSource={LinkedinLogo}
              altDescription='linkedin'
            />
          </SocialIcons>
          <SocialIcons>
            <CustomIcon
              className={"github"}
              targetUrl='https://github.com/caglaryalcin'
              imageSource={GithubLogo}
              altDescription='github'
            />
          </SocialIcons>
          <SocialIcons>
            <CustomIcon
              className={"twitter"}
              targetUrl='https://twitter.com/cgasys'
              imageSource={TwitterLogo}
              altDescription='twitter'
            />
          </SocialIcons>
        </SocialIconsContainer>
      </div>
      <ImageContainer>
        <img src={PP} alt='profile' />
      </ImageContainer>
    </MainContainer>
  );
};

export default SnippetCard;
