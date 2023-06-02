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
					I'm currently focused on<Tech style={{ borderBottom: '3px solid #f0db4f' }}>Virtualization</Tech>,<Tech style={{ borderBottom: '3px solid #ff9900' }}>Cloud</Tech>,<Tech style={{ borderBottom: '3px solid #00b336' }}>Backup</Tech> and<Tech style={{ borderBottom: '3px solid #cd8d8d' }}>OpenSource</Tech>platforms.
				</Item>
				<Item>
					I've knowledge on<Tech style={{ borderBottom: '3px solid #0db7ed' }}>Docker</Tech>for containerization. I also write<Tech style={{ borderBottom: '3px solid #007acc' }}>Bash</Tech>and<Tech style={{ borderBottom: '3px solid #007acc' }}>Powershell</Tech>according to the needs of the institutions I work in.
				</Item>
				<Item>
					I'm familiar with<Tech style={{ borderBottom: '3px solid #d40000' }}>Linux Distributions</Tech>and I like to use them very much.
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
