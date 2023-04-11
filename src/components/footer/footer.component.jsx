import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FooterDiv } from "./footer.styles";
import { HiOutlineKey } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <FooterDiv>
        © {new Date().getFullYear() + " "}
        Caglar Yalcin
        <br />
        <a href="mailto:mail@caglaryalcin.com">mail[at]caglaryalcin.com </a>
        <AiOutlineMail /> &nbsp;
        <a href="https://raw.githubusercontent.com/caglaryalcin/pgp-public-key/main/public.asc" target="_blank">
          <HiOutlineKey />
        </a>
      </FooterDiv>
    </>
  );
};

export default Footer;
