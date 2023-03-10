import React from 'react'

import {
	Title,
	Snippet,
	Description,
	SocialIcons,
	MainContainer,
	ImageContainer
} from './snippet-card.styles'

import CustomIcon from './../custom-icon/custom-icon.component'
import CustomLink from './../custom-link/custom-link.component'
import LinkedinLogo from '../../images/social/linkedin_light.png'
import GithubLogo from '../../images/social/github_light.png'
import TwitterLogo from '../../images/social/twitter_light.png'
import PP from './../../images/pp.png'
import ReactRotatingText from 'react-rotating-text'

const SnippetCard = () => {
	return (
		<MainContainer>
			<div>
				<Title>Hi, I'm Caglar.</Title>
				<Snippet>System Engineer at <CustomLink targetUrl='https://intertech.com.tr'>InterTech</CustomLink></Snippet>
				<Description>
				I'm an experienced System Administrator in the field virtualization and interested in open source solutions, computer hardware and professional IT infrastructure products.<br />
				I <b><ReactRotatingText items={['love free and open-source software (FOSS).', 'love privacy.', 'love security.', 'love virtualization platforms.', 'love writing scripts.','also hate Facebook platforms and would never recommend using it. Take important of your privacy.']} /></b>
				</Description>
				<SocialIcons>
					<CustomIcon
						className={"linkedin"}
						targetUrl='https://www.linkedin.com/in/caglar-yalcin/'
						imageSource={LinkedinLogo}
						altDescription='linkedin'/>
					<CustomIcon
						className={"github"}
						targetUrl='https://github.com/caglaryalcin'
						imageSource={GithubLogo}
						altDescription='github' />
					<CustomIcon
						className={"twitter"}
						targetUrl='https://twitter.com/cglrbae'
						imageSource={TwitterLogo}
						altDescription='twitter' />
				</SocialIcons>
			</div>
			<ImageContainer>
				<img src={PP} alt='profile' />
			</ImageContainer>
		</MainContainer>
	)
}

export default SnippetCard