import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import BoxContent from "elements/Boxed";
import Column from "elements/Column";
import ReadOn from "elements/ReadOn";
import Link from "../components/common/GatsbyLink";
import config from "../../data/SiteConfig";
import Layout from "../layout";
import WorkHero from "../components/WorkHero";
import CTAButton from "../components/common/MajorButton";
import BlogListing from "../components/PostListing/PostListing";
import WorkIcon from "../../static/SVG/Work.svg";
import BlogIcon from "../../static/SVG/Blog.svg";
import Now from "../components/Now";
import Profile from "../../static/images/Profile.webp";

const Row = styled.section`
  padding: var(--var-padding-l) 0;
  background: white;

  &:first-child {
    padding-bottom: 0;
  }
`;

const Intro = styled(Row)`
  justify-content: center;
  text-align: center;
`;

const Hero = styled.div`
  text-align: left;

  h1 {
    font-family: var(--font-primary);
    margin-top: 0;
  }
`;

const HeroGraphics = styled.figure`
  margin: 0;
  padding: 0;
`;

const WhiteBox = styled.div`
  border-top: 1px var(--color-brand-500) solid;
  background: white;
  height: 50px;
  position: relative;
  overflow: hidden;
  bottom: 50px;
`;

const GraphicBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: -24px;

  & > * {
    margin-right: 16px;
    overflow: hidden;
    position: relative;
    left: 0;
    bottom: 20px;
    transition: all 0.3s ease-in;

    &:hover {
      bottom: 30px;
    }

    &:first-child {
      margin-right: -8px;
    }
  }
`;
const IntroBox = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 0 0 2rem 0;
  max-width: 400px;
`;
const More2Button = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 1rem 2rem;
  border: 0;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: var(--color-brand-500);
    color: var(--color-black-500);
  }
`;

const ColumnSpaced = styled(Column)`
  grid-gap: 3rem;
`;

const FullGreyRow = styled(Row)`
  background: var(--color-white-300);
`;

const FullYellowRow = styled(Row)`
  background: var(--color-brand-300);
`;
const ContactButton = styled.button`
  border: none;
  box-sizing: border-box;
  background: none;
  padding: 1rem 2rem;
  transition: all 0.3s ease-in-out;
  margin: 0 auto;

  &:hover {
    background: var(--color-brand-500);
    color: var(--color-black-500);
  }
`;
const AboutBox = styled.div`
  width: 100%;
  display: flex;
`;

const AboutIntro = styled.div``;

const AboutIcon = styled.div`
  justify-self: flex-end;
`;

const HalfBox = styled.div``;

const ProfileImage = styled.div`
  width: 100%;

  img {
    box-shadow: 10px 10px 0px 1px rgba(237, 237, 237, 1);
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  font-family: var(--font-secondary);
  font-weight: 500;
`;

const Center = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
`;

const Blog = styled.section`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto auto;
  grid-row-gap: 4rem;
  grid-column-gap: 2rem;
  align-items: flex-start;

  & > div:nth-child(2) {
    grid-column: span 4;
  }

  & > div:nth-child(3) {
    grid-column: span 3;
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Overlay = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  width: 10%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  z-index: 1000;
`;

const BlogIntro = styled.div`
  margin-bottom: var(--var-padding-m);
  p {
    color: var(--color-secondary-700);
  }
`;

const Contact = styled.div`
  display: inline-block;

  small {
    font-family: var(--font-secondary);
  }

  h2 {
    color: var(--color-secondary-700);
  }
`;
const IndexPage = ({ data }) => {
  const workEdges = data.Work.edges;
  const blogEdges = data.Blog.edges;
  return (
    <Layout>
      <Intro>
        <BoxContent>
          <Hero>
            <small>When Design Meets Technology</small>
            <h1>
              Designing with
              <br />
              <span className="brand">complexity</span>
            </h1>
            <HeroGraphics>
              <GraphicBox>
                <svg
                  className="triangle"
                  width="96"
                  height="83"
                  viewBox="0 0 96 83"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.96668 81L48 3L93.0333 81H2.96668Z"
                    stroke="#535E7C"
                    strokeWidth="3"
                  />
                </svg>
                <svg
                  width="107"
                  height="107"
                  viewBox="0 0 107 107"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="53.5"
                    cy="53.5"
                    r="52"
                    stroke="#535E7C"
                    strokeWidth="3"
                  />
                </svg>
                <svg
                  width="82"
                  height="82"
                  viewBox="0 0 82 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.5"
                    y="1.5"
                    width="79"
                    height="79"
                    stroke="#535E7C"
                    strokeWidth="3"
                  />
                </svg>
                <svg
                  width="133"
                  height="126"
                  viewBox="0 0 133 126"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.16493 48.5963L66.5 1.8541L130.835 48.5963L106.261 124.227H26.7387L2.16493 48.5963Z"
                    stroke="#535E7C"
                    strokeWidth="3"
                  />
                </svg>
              </GraphicBox>
              <WhiteBox />
            </HeroGraphics>
          </Hero>
          <IntroBox>
            <small>Hi! My name is Samuel</small>
            <Subtitle>
              I believe design is the way to navigate today's complex world.
              Join me in this journey.
            </Subtitle>
          </IntroBox>
          <CTAButton href="#contact" text="Get In Touch" />
        </BoxContent>
      </Intro>

      <Row>
        <BoxContent>
          <ColumnSpaced>
            <HalfBox>
              <small>I'm working as a</small>
              <h2>Product Designer</h2>
              <p>
                Currently I'm based in Hong Kong, specialising in user-interface
                and user-experience design, crafting outstanding digital
                products. <br /> <br /> I lead design at Hyperair as Principal
                Designer. Before that, I worked as Cross-Content Intern at
                iTunes & App Store, Apple.
              </p>
              <ReadOn text="About Me" href="/about" />
            </HalfBox>
            <HalfBox>
              <ProfileImage>
                <img src={Profile} />
              </ProfileImage>
            </HalfBox>
          </ColumnSpaced>
        </BoxContent>
      </Row>
      <FullGreyRow className="full-bleed">
        <BoxContent>
          <AboutBox>
            <AboutIntro>
              <small>Let's See</small>
              <h2>My Work</h2>
              <p>
                Years of experience in delivering elegant solutions for web and
                app.
              </p>
            </AboutIntro>
          </AboutBox>
          <WorkHero postEdges={workEdges} />
          <Center>
            <ContactButton>
              <Link to="/work" className="noeffect">
                View More →
              </Link>
            </ContactButton>
          </Center>
        </BoxContent>
      </FullGreyRow>
      <Row>
        <BoxContent>
          <BlogIntro>
            <h2>Blog</h2>
            <Subtitle>
              I write about design, technology and productivity.
            </Subtitle>
          </BlogIntro>
          <Blog>
            <BlogListing postEdges={blogEdges} />
            <ReadOn text="Read All Blog Posts →" href="/blog" />
          </Blog>
        </BoxContent>
      </Row>
      {/*           <FullYellowRow className="full-bleed">
            <BoxContent>
              <Now />
            </BoxContent>
          </FullYellowRow> */}
    </Layout>
  );
};

export default IndexPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    Work: allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/work/" } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 200)
          timeToRead
          frontmatter {
            title
            subtitle
            path
            tags
            color
            cover {
              publicURL
              size
              childImageSharp {
                sizes(maxWidth: 1200) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                }
              }
            }
            date
          }
        }
      }
    }
    Blog: allMdx(
      limit: 4
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: "Design Journal" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(pruneLength: 100)
          timeToRead
          frontmatter {
            title
            path
            tags
            category
            tldr
            cover {
              publicURL
              size
              childImageSharp {
                sizes(maxWidth: 1140) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                }
              }
            }
            date
          }
        }
      }
    }
  }
`;
