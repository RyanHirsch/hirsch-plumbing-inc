import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import "normalize.css";

import App from "./styles/App";
import Content from "./styles/Content";
import Header from "./Header";
import Navigation from "./Navigation";
import "./layout.css";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            phone
            address
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content:
                "Hirsch Plumbing is a locally owned and operating plumbing service",
            },
            {
              name: "keywords",
              content:
                "plumbing, monroe county, waterloo, columbia, red bud, 24hr, 24 hour",
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <App>
          <Header
            title={data.site.siteMetadata.title}
            phone={data.site.siteMetadata.phone}
            address={data.site.siteMetadata.address}
          />
          <Navigation />
          <Content>{children}</Content>
          {/* <Footer /> */}
        </App>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
