import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"; // eslint-disable-line import/no-extraneous-dependencies

import theme from "../utils/theme";
import { Link } from "gatsby";

const Nav = styled.nav`
  background-color: ${theme.colors.primary};
  margin-top: 0.75rem;

  font-weight: bold;
  color: ${theme.colors.secondary};

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 1.175rem;
    display: flex;
    justify-content: space-evenly;
  }

  li {
    margin: 0.25rem 0;
  }

  a {
    color: ${theme.colors.secondary};
    text-decoration: none;
  }

  @media only screen and (min-width: 600px) {
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </Nav>
  );
}

Navigation.propTypes = {};
