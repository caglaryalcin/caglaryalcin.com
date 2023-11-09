import React, { useState } from "react";
import styled from "styled-components";
import {
  SectionTitle,
  SubTitle,
  ItemList,
  Item,
  Date,
  BoldText,
  Edulist,
} from "./../section-card/section-card.styles";

import CustomEmoji from "./../custom-emoji/custom-emoji.component";
import CustomLink from "../custom-link/custom-link.component";
import useStyles from "./journey-card.styles";
import fuji from "../../images/company/fuji.jpg";
import mtrs from "../../images/company/mtrs.jpg";
import netas from "../../images/company/netas.jpg";
import inter from "../../images/company/inter.jpg";

const SeeMoreLink = styled.div`
  display: inline-block;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #b85c5c;
    outline-width: 0;
  }
`;
const ItemContainer = styled.div`
  position: relative;
  padding-left: 30px;
`;

const Dot = styled.span`
  height: 7px;
  width: 7px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 5px;
  top: 15px;
  z-index: 1;
`;

const Line = styled.div`
  width: 2px;
  background-color: #bbb;
  position: absolute;
  left: 7px;
  top: 27px;
  height: 25px;
  z-index: 0;
`;

const Logo = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-bottom: -3px;
  align-self: center;
  border: 0.5px solid #181a1b;
  padding: 0.5px;
`;

const JourneyCard = () => {
  const classes = useStyles();
  const [loadedMore, setLoadedMore] = useState(false);

  return (
    <>
      <SectionTitle>Experiences</SectionTitle>
      <ItemList style={{ marginTop: "30px" }}>
        <Item>
          <Logo src={inter} alt="" />
          <span className={classes.presentText}>
            <CustomLink targetUrl="https://intertech.com.tr">
              InterTech
            </CustomLink>
          </span>
        </Item>

        <ItemContainer>
          <Dot />
          <Line />
          <Item>
            Senior System Engineer <Date>(Nov 2023 – )</Date>
          </Item>
        </ItemContainer>

        <ItemContainer>
          <Dot />
          <Item>
            System Engineer <Date>(Apr 2022 – Nov 2023 )</Date>
          </Item>
        </ItemContainer>

        <Item>
          <Logo src={fuji} alt="" />
          <CustomLink targetUrl="https://www.fujifilm.com/tr/tr">
            Fujifilm Turkey
          </CustomLink>
        </Item>

        <ItemContainer>
          <Item>
            <Dot />
            System Administrator <Date>(May 2019 – Mar 2022)</Date>
          </Item>
        </ItemContainer>

        <Item>
          <Logo src={mtrs} alt="" />
          <CustomLink targetUrl="https://www.matras.com/">Matraş</CustomLink>
        </Item>

        <ItemContainer>
          <Item>
            <Dot />
            System Administrator <Date>(May 2019 – Mar 2022)</Date>
          </Item>
        </ItemContainer>

        <Item>
          <Logo src={netas} alt="" />
          <CustomLink targetUrl="https://www.netas.com.tr/">Netaş</CustomLink>
        </Item>

        <ItemContainer>
          <Item>
            <Dot />
            System Support Specialist <Date>(Oct 2013 – Jun 2016)</Date>
          </Item>
        </ItemContainer>
        {!loadedMore && (
          <SeeMoreLink onClick={() => setLoadedMore(true)}>
            Education &#8629;
          </SeeMoreLink>
        )}
        {loadedMore && (
          <>
            <SubTitle>Education</SubTitle>
            <Edulist>
              <Item>
                <CustomEmoji label="graduation" emoji="📚" /> Studying at{" "}
                <BoldText>Anadolu University</BoldText> Management Information
                System department. <Date>(2021 - )</Date>
              </Item>
              <Item>
                <CustomEmoji label="graduation" emoji="🎓" /> Graduated from{" "}
                <BoldText>Ataturk University</BoldText> with a associate degree
                in Information Management. <Date>(2021)</Date>
              </Item>
            </Edulist>
          </>
        )}
      </ItemList>
    </>
  );
};

export default JourneyCard;
