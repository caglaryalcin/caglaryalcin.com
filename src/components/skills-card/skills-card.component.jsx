import React from 'react'

import {
	SectionTitle,
	StackList,
	Item,
	Tech,
	CurrentLearning,
	BoldText,
} from './../section-card/section-card.styles'

const SkillsCard = () => {
	return (
		<>
			<SectionTitle>Technology Stack</SectionTitle>
			<StackList>
				<Item>
					I'm currently focused on<Tech style={{ borderBottom: '3px solid #f0db4f' }}>Virtualization</Tech>,<Tech style={{ borderBottom: '3px solid #ff9900' }}>Cloud Computing</Tech>,<Tech style={{ borderBottom: '3px solid #00b336' }}>Backup Solutions</Tech>, and<Tech style={{ borderBottom: '3px solid #692e2e' }}>Open-Source</Tech>Platforms.
				</Item>
				<Item>
					I have knowledge of<Tech style={{ borderBottom: '3px solid #0db7ed' }}>Docker</Tech>for containerization. Additionally, I write scripts in <Tech style={{ borderBottom: '3px solid #007acc' }}>Bash</Tech>and<Tech style={{ borderBottom: '3px solid #007acc' }}>Powershell</Tech>based on the specific needs of the institutions I work with.
				</Item>
				<Item>
					I am familiar with various<Tech style={{ borderBottom: '3px solid #d40000' }}>Linux distributions</Tech>, and I greatly enjoy using them."
				</Item>
			</StackList>
			<CurrentLearning>
				<BoldText>Currently learning: </BoldText>
				DevOps
			</CurrentLearning>
		</>
	)
}

export default SkillsCard