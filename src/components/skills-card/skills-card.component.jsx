import React from 'react';

import {
	SectionTitle,
	StackList,
	Techs,
	Tech,
	TerminalPrompt,
	TerminalUser,
	TerminalSymbol,
	TerminalPath,
	TerminalCursor,
} from './../section-card/section-card.styles';

const SkillsCard = () => {
	return (
		<>
			<SectionTitle>Technology Stack</SectionTitle>
			<StackList>
				<Techs>
					He's my best friend <Tech style={{ borderBottom: '3px solid #d1672a' }}><strong>Claude</strong></Tech> — and his minions? They do my bidding from the shadows.
				</Techs>
				<Techs>
					I'm currently focused on <Tech style={{ borderBottom: '3px solid #326CE5' }}>k8s</Tech>, <Tech style={{ borderBottom: '3px solid #73ABFF' }}>Ansible</Tech> and{' '}
					<Tech
						as="a"
						href="https://n8n.caglaryalcin.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Open my n8n instance"
						style={{ borderBottom: '3px solid #ff9900' }}
					>
						n8n
					</Tech> services.
				</Techs>
				<Techs>
					I'm using <Tech style={{ borderBottom: '3px solid #cf4f4f' }}>Linux distributions</Tech> for both desktop and server, and I greatly enjoy using them.
				</Techs>
				<Techs>
					I'm writing scripts in{' '}
					<TerminalPrompt
						$shell="bash"
						role="img"
						aria-label="Bash terminal prompt: bash at linux in the home directory"
					>
						<TerminalUser aria-hidden="true">bash@linux</TerminalUser>
						<TerminalSymbol aria-hidden="true">:</TerminalSymbol>
						<TerminalPath aria-hidden="true">~</TerminalPath>
						<TerminalSymbol aria-hidden="true">$&nbsp;</TerminalSymbol>
						<TerminalCursor $shell="bash" aria-hidden="true" />
					</TerminalPrompt>{' '}
					and{' '}
					<TerminalPrompt
						$shell="powershell"
						role="img"
						aria-label="PowerShell terminal prompt at the C drive"
					>
						<TerminalUser aria-hidden="true">PS&nbsp;</TerminalUser>
						<TerminalPath aria-hidden="true">C:\</TerminalPath>
						<TerminalSymbol aria-hidden="true">&gt;&nbsp;</TerminalSymbol>
						<TerminalCursor $shell="powershell" aria-hidden="true" />
					</TerminalPrompt>{' '}
					based on the specific needs of the institutions I work with.
				</Techs>
			</StackList>
		</>
	);
}

export default SkillsCard;
