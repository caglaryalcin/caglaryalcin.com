import styled from "styled-components";

export const FooterDiv = styled.div`
  font-size: 15px;
  border-top: 4px solid #413f3f;
  margin-top: 60px;
  padding-top: 20px;
  text-align: right;
  @media (max-width: 768px) {
    text-align: left;
    .key-icon, .mail-icon {
      font-size: 18px;
    }
  }
`;
