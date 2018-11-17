import React from "react";
import { Link } from "gatsby";
import Logo from "../images/logo.svg";
import styled from "styled-components";

const legacyGreen = "#377F72";
const green = "rgb(0, 95, 44)";
const AppHeader = styled.header`
  background-color: ${green};
  color: white;
  margin-bottom: 1.45rem;

  h1 {
    font-weight: bold;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
  }

  .header__container {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    text-align: center;
  }

  .header__logo {
    height: 5rem;
    fill: white;
    margin-right: 1rem;
  }

  .header__contact-info {
    font-weight: bold;
  }
`;

const Header = ({ siteTitle }) => (
  <AppHeader>
    <div className="header__container">
      <h1>
        <Link to="/">
          <Logo className="header__logo" />
          {siteTitle}
        </Link>
      </h1>
      <div className="header__contact-info">
        <a href="tel:6189777821">(618) 977-7821</a>
      </div>
    </div>
  </AppHeader>
);

export default Header;
