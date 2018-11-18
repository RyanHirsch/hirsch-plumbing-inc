import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"; // eslint-disable-line import/no-extraneous-dependencies

const Wrapper = styled.div`
  grid-area: footer;

  background-color: red;
`;

export default function Footer() {
  return <Wrapper>Content</Wrapper>;
}

Footer.propTypes = {};
