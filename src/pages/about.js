import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import Layout from "../components/layout";

const Wrapper = styled.div`
  display: block;

  .about__image {
    margin: 0 auto;
    max-width: 300px;
  }
  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 320px auto;
    .about__image {
      margin: 0;
      margin: 10px;
    }
    /* flex-direction: column; */
    /* align-items: center; */
  }
`;

const About = ({ image }) => (
  <Layout>
    <h1>About</h1>
    <Wrapper>
      <Img className="about__image" fluid={image} />
      <p>
        Hirsch Plumbing is a locally owned and operated company providing
        comprehensive repair, replacement, and installation services in Monroe
        County and surrounding areas. By focusing on the principles of
        professionalism, dependability, and integrity; we’re committed to
        delivering superior value to each of our clients. At Hirsch Plumbing, we
        know that our reputation is built on the satisfaction of our customers.
        That's why you can expect the highest quality of work; outstanding
        customer service; and honest, affordable pricing. Contact us today to
        see the difference for yourself. Call to get started or to learn more
        today.
      </p>
    </Wrapper>
  </Layout>
);

const AboutPage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "nathan-and-erin.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <About image={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
);

export default AboutPage;
