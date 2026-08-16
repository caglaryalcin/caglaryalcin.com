import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FooterDiv } from "./footer.styles";
import { HiOutlineKey } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <FooterDiv>
        © {new Date().getFullYear() + " "}Caglar Yalcin
        <br />
        <a
          href="mailto:mail@caglaryalcin.com"
          className="mail-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send email"
        >
          <AiOutlineMail aria-hidden="true" /> &nbsp;
        </a>
        <a
          href="https://raw.githubusercontent.com/caglaryalcin/pgp-public-key/main/public.asc"
          className="key-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download PGP public key"
        >
          <HiOutlineKey aria-hidden="true" />
        </a>
      </FooterDiv>
    </>
  );
};

export default Footer;
