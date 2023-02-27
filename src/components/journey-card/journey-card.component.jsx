import React, { useState } from 'react'
import styled from 'styled-components'
import {
	SectionTitle,
	SubTitle,
	ItemList,
	Item,
	Date,
	BoldText
} from './../section-card/section-card.styles'
import CustomEmoji from './../custom-emoji/custom-emoji.component'
import CustomLink from '../custom-link/custom-link.component'
import useStyles from './journey-card.styles'

const SeeMoreLink = styled.div`
	text-decoration: underline;
	cursor: pointer;
	&:hover {
    color: #555;
  	outline-width: 0;
  }
`

const JourneyCard = () => {
	const classes = useStyles()

	const [loadedMore, setLoadedMore] = useState(false)

	return (
		<>
			<SectionTitle><CustomEmoji label='computer' emoji='💻' /> Experiences</SectionTitle>
			<SubTitle>Present</SubTitle>
			<ItemList>
				<Item>
				<CustomEmoji label='graduation' emoji='🏛️' /> <span className={classes.presentText}>System Engineer at <CustomLink targetUrl='https://intertech.com.tr'>InterTech</CustomLink>. <Date>(Apr 2022 – )</Date></span>
				</Item>
			</ItemList>
			<SubTitle>Past</SubTitle>
			<ItemList>
				<Item>
				<CustomEmoji label='graduation' emoji='🚑' /> System Support Specialist at <CustomLink targetUrl='https://www.fujifilm.com/tr/tr'>Fujifilm Turkey</CustomLink>. <Date>(May 2019 – Mar 2022)</Date>
				</Item>
				<Item>
				<CustomEmoji label='graduation' emoji='👜' /> System Administrator at <CustomLink targetUrl='https://www.matras.com/'>Matraş</CustomLink>. <Date>(Dec 2016 – Apr 2019)</Date>
				</Item>
				<Item>
				<CustomEmoji label='graduation' emoji='💾' /> System Support Specialist at <CustomLink targetUrl='https://www.netas.com.tr/'>Netaş</CustomLink>. <Date>(Oct 2013 – Jun 2016)</Date>
				</Item>
				{!loadedMore && <SeeMoreLink onClick={() => setLoadedMore(true)}>Education</SeeMoreLink>}
				{loadedMore && (
					<>
						<Item>
							<CustomEmoji label='graduation' emoji='📚' /> Studying at <BoldText>Anadolu University</BoldText> Management Information System department. <Date>(2021 - )</Date>
						</Item>
						<Item>
							<CustomEmoji label='graduation' emoji='🎓' /> Graduated from <BoldText>Ataturk University</BoldText> with a associate degree in Information Management. <Date>(2021)</Date>
						</Item>
					</>
				)}
			</ItemList>
		</>
	)
}

export default JourneyCard
