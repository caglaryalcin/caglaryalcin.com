import React from 'react';

import {
	SectionTitle,
	BashBlinkingCursor,
	PSBlinkingCursor,
	StackList,
	Techs,
	Tech,
	Bash,
	Bash2,
	Bash3,
	PsComponent,
} from './../section-card/section-card.styles';

import CustomLink from "../custom-link/custom-link.component";	

const SkillsCard = () => {
	return (
		<>
			<SectionTitle>Technology Stack</SectionTitle>
			<StackList>
				<Techs>
					I'm currently focused on<Tech style={{ borderBottom: '3px solid #326CE5' }}>K8s</Tech>, <Tech style={{ borderBottom: '3px solid #73ABFF' }}>Ansible</Tech> and <Tech style={{ borderBottom: '3px solid #ff9900' }}>AWS</Tech> services.
				</Techs>
				<Techs>
					I'm using <Tech style={{ borderBottom: '3px solid #cf4f4f' }}>Linux distributions</Tech> for both desktop and server, and I greatly enjoy using them.
				</Techs>
				<Techs>
					He's my best friend now<Tech style={{ borderBottom: '3px solid #16a182' }}><CustomLink targetUrl="https://ai.caglaryalcin.com">ChatGPT</CustomLink></Tech>.
				</Techs>
				<Techs>
					I'm writing scripts in <Bash>bash@linux<Bash2>:<Bash3>~</Bash3>$ <BashBlinkingCursor>█</BashBlinkingCursor></Bash2></Bash> and <PsComponent> PS C:\> <PSBlinkingCursor></PSBlinkingCursor></PsComponent> based on the specific needs of the institutions I work with.
				</Techs>
			</StackList>
		</>
	);
}

export default SkillsCard;
