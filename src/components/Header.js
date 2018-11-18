import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Logo from "../images/logo.svg";
import { phoneNumber } from "../utils/format";
import theme from "../utils/theme";

const legacyGreen = "#377F72";
const green = "rgb(0, 95, 44)";
const AppHeader = styled.header`
  color: ${green};
  grid-area: header;
  margin: 0 1rem;

  h1 {
    font-size: 1.75rem;
    font-weight: bold;
    text-align: left;
    margin-bottom: 0;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${green};
    text-decoration: none;
  }

  .header__container {
    margin: 0 auto;
    max-width: 960px;
    text-align: center;
  }

  .header__logo {
    height: 5rem;
    fill: ${green};
    margin-right: 1rem;
  }

  .header__contact-info {
    overflow: hidden;
  }

  .header__contact-info ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: -3px;
  }
  .header__contact-info li {
    flex-grow: 1;
    flex-basis: auto;
    margin: 0.25em 0;
    padding: 0 1em;
    text-align: center;
    border-left: 3px solid ${theme.colors.primary};
    background-color: #fff;
  }

  @media only screen and (min-width: 600px) {
    margin: 0;
    h1 {
      font-size: 2rem;
    }
  }
`;

const Header = ({ title, phone, address }) => (
  <AppHeader>
    <div className="header__container">
      <h1>
        <Link to="/">
          <Logo className="header__logo" />
          {title}
        </Link>
      </h1>
      <div className="header__contact-info">
        <ul>
          <li>
            <div className="header__address">{address}</div>
          </li>
          <li>
            <a className="header__phone" href={`tel:${phone}`}>
              {phoneNumber(phone)}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </AppHeader>
);

export default Header;
