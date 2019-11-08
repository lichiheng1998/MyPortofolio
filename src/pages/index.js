import React from "react";
import "../../mystyles.scss";
import Banner from "../components/Banner.js";
import Navbar from "../components/Navbar.js";
import MyTimeline from "../components/MyTimeline.js";
import Skills from "../components/Skills";
import "./body.css";
import Project from "../components/Project.js";
import ProjectBanner from "../components/ProjectBanner";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import config from 'react-reveal/globals';
import { graphql } from "gatsby";

config({ ssrFadeout: true });

const IndexPage = ({data}) => (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Chiheng Li's Website</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Navbar />
        <Banner images={data.bannerImages}/>
        <MyTimeline />
        <Skills images={data.languageImages}/>
        <ProjectBanner images={data.bannerImages}/>
        <Project images={data.sanpshotImages} />
        <Footer />
    </div>
);

export default IndexPage;

export const query = graphql`
  query {
    bannerImages: allFile(filter: {relativeDirectory: {eq: "banners"}}) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    sanpshotImages: allFile(filter: {relativeDirectory: {eq: "snapshots"}}) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    languageImages: allFile(filter: {relativeDirectory: {eq: "languages"}}) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
