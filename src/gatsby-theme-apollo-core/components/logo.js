// import { Logo } from "gatsby-theme-apollo-core";
import React from "react";
import LogoImageSrc from "../../assets/sapiens_logo.png";
import styled from "@emotion/styled";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;

  .logo__img {
    width: 50px;
    height: 50px;
    margin-right: 5px;
  }

  .logo__text {
    font-size: 25px;
  }
`;

export default function Logo() {
  return (
    <StyledLogo>
      <img className="logo__img" src={LogoImageSrc} alt="dd" />
      <h3 className="logo__text">সেপিয়েন্স</h3>
    </StyledLogo>
  );
}
