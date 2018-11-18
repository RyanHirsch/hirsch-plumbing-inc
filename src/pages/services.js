import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
const servicesQuery = graphql`
  query jsonData {
    allServicesJson {
      edges {
        node {
          id
          name
          description
        }
      }
    }
  }
`;

const Service = ({ name, description }) => (
  <section className="service">
    <h2 className="service__service-name">{name}</h2>
    <div className="service__service-content">{description}</div>
  </section>
);

const ServicesPage = () => (
  <StaticQuery
    query={servicesQuery}
    render={data => (
      <Layout>
        <h1>Services</h1>
        {data.allServicesJson.edges.map(({ node }) => (
          <Service
            key={node.id}
            name={node.name}
            description={node.description}
          />
        ))}
      </Layout>
    )}
  />
);

export default ServicesPage;
