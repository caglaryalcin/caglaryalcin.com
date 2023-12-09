import React from 'react'
import { BlinkingCursor,PSBlinkingCursor } from './../section-card/section-card.styles';

import {
	SectionTitle,
	StackList,
	Techs,
	Tech,
	Bash,
	Bash2,
	Bash3,
	PsComponent,
} from './../section-card/section-card.styles'



const SkillsCard = () => {
	return (
		<>
			<SectionTitle>Technology Stack</SectionTitle>
			<StackList>
				<Techs>
					I'm currently focused on<Tech style={{ borderBottom: '3px solid #0db7ed' }}>Docker</Tech>platform,<Tech style={{ borderBottom: '3px solid #ff9900' }}>AWS</Tech> services and<Tech style={{ borderBottom: '3px solid #62dafb' }}>Next.js</Tech>.
				</Techs>
				<Techs>
					I'm using <Tech style={{ borderBottom: '3px solid #cf4f4f' }}>Linux distributions</Tech>for both desktop and server, and i greatly enjoy using them.
				</Techs>
				<Techs>
					I'm familiar with<Tech style={{ borderBottom: '3px solid #fc6d26' }}>Gitlab CI/CD</Tech>.
				</Techs>
				<Techs>
					I'm writing scripts in <Bash style={{ borderBottom: '3px solid #300a24' }}>bash@linux<Bash2>:<Bash3>~</Bash3>$ <span style={{ whiteSpace: 'pre' }}> </span><BlinkingCursor>█</BlinkingCursor></Bash2></Bash> and <PsComponent style={{ borderBottom: '3px solid #012456', marginLeft: window.innerWidth < 768 ? '19px' : '0px' }}> PS C:\> <PSBlinkingCursor>▐</PSBlinkingCursor></PsComponent> based on the specific needs of the institutions i work with.
				</Techs>
			</StackList>
		</>
	)
}

export default SkillsCard