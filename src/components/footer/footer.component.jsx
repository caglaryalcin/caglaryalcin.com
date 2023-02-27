import React from 'react'

import { FooterDiv } from './footer.styles'

import CustomEmoji from './../custom-emoji/custom-emoji.component'

const Footer = () => {
    return (
        <>
            <FooterDiv>
                © {new Date().getFullYear() + " "}
                Caglar Yalcin
                <br /><a href="mailto:mail@caglaryalcin.com">mail[at]caglaryalcin.com</a> <CustomEmoji label='mailbox' emoji='📩' />
            </FooterDiv>
        </>
    )
}

export default Footer
