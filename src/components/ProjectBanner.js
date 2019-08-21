import React from "react";
import Zoom from 'react-reveal/Zoom';
import { Parallax, Background } from 'react-parallax';
import { getExtraHeight, findFluidImage } from "../utils/utils";
import Img from "gatsby-image";

const ProjectBanner = (props) => {
    let banner = findFluidImage(props.images, "projectBanner.jpg");
    return (
        <Parallax strength={-800}>
            <Background className="custom-bg">
                    <Img style={{height: `calc(100vh + ${getExtraHeight(-800)}px)`, width:"100vw", minWidth:1800}} fluid={banner.node.childImageSharp.fluid} />
            </Background>
            <section className="hero is-fullheight">
                <Zoom clear>
                    <p style={{margin: "auto", color: "white"}} className="is-size-2">Project Showcases</p>
                </Zoom>
            </section>
        </Parallax>
    );
}

export default ProjectBanner;
