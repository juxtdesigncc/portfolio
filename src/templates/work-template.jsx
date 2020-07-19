import React from "react";

import { graphql } from "gatsby";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "gatsby-plugin-mdx";
import Helmet from "react-helmet";
import Boxed from "elements/Boxed";
import Layout from "../layout";
import SEO from "../components/SEO";
import WorkPageHero from "../components/WorkPageHero";
import config from "../../data/SiteConfig";
import "../layout/work.css";

const Title = styled.h1`
  font-family: var(--font-tertiary);
  padding-top: var(--var-padding-m);
  text-align: center;
  font-size: var(--font-size-xl);
  margin: 0;
`;

const Subtitle = styled.h2`
  font-family: var(--font-primary);
  font-weight: 500;
  font-size: var(--font-size-s);
  color: var(--color-primary-shades-300);
  text-align: center;
`;

const WorkPageTemplate = ({ pageContext, data }) => {
  const path = "work" + pageContext.slug;
  const postEdges = data.mdx.frontmatter;

  return (
    <Layout>
      <Helmet>
        <title>{`${postEdges.title} | ${config.siteTitleAlt}`}</title>
      </Helmet>
      <SEO postPath={path} postNode={data.mdx} postSEO />
      {/* <WorkPageHero data={postEdges} /> */}

      <Boxed size="small">
        <Title>{postEdges.subtitle}</Title>
        <Subtitle>{postEdges.title}</Subtitle>
        <div className="work">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </Boxed>
    </Layout>
  );
};

export default WorkPageTemplate;

export const pageQuery = graphql`
  query WorkPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        title
        subtitle
        path
        tags
        color
        cover {
          publicURL
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;
