import React from 'react'

import {
	SectionTitle,
	StackList,
	Item,
	Tech,
	Bash,
	PS,
} from './../section-card/section-card.styles'
import ReactRotatingText from 'react-rotating-text';

const SkillsCard = () => {
	return (
		<>
			<SectionTitle>Technology Stack</SectionTitle>
			<StackList>
				<Item>
					I'm currently focused on<Tech style={{ borderBottom: '3px solid #0db7ed' }}>Docker</Tech>platform,<Tech style={{ borderBottom: '3px solid #ff9900' }}>AWS</Tech> services and<Tech style={{ borderBottom: '3px solid #62dafb' }}>Next.js</Tech>.
				</Item>
				<Item>
					I'm using <Tech style={{ borderBottom: '3px solid #cf4f4f' }}>Linux distributions</Tech>for both desktop and server, and I greatly enjoy using them.
				</Item>
				<Item>
					I'm familiar with<Tech style={{ borderBottom: '3px solid #fc6d26' }}>Gitlab CI/CD</Tech>.
				</Item>
				<Item>
					I write scripts in <Bash style={{ borderBottom: '3px solid #5c5c5c' }}>user@ubuntu:~$<ReactRotatingText items={['']} /></Bash> and <PS style={{ borderBottom: '3px solid #5c5c5c' }}>PS C:\<ReactRotatingText items={['']} /></PS> based on the specific needs of the institutions I work with.
				</Item>
			</StackList>
		</>
	)
}

export default SkillsCard