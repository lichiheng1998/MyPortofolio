import React from "react";
import laptopFrame from "../images/laptopFrame.png";
import phoneFrame from "../images/phoneFrame.png";
import projects from "../models/projects";
import styles from "./Project.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
import {wrapper} from "./Planguages.module.css";
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

let textOrder = 2;
let demoOrder = 1;
let slideConfig = {
    left: false,
    right: true
}
const laptopMargin = "7% 7% 12%";
const phoneMargin = "20% 14% 21%";
const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
}
let imageContext = require.context("../images/snapshots/", false, /\.jpg$/);
class Project extends React.Component {
    constructor(){
        super();
        this.state = {
            animate: false
        };
    }

    componentDidMount(){
        this.setState({
            animate: true
        });
    }

    render(){
        var self = this;
        this.components = Object.keys(projects).map((key) => {
            let images = [];
            for(let i = 1; i <= projects[key].numSnap; i++){
                images.push(
                    <img key={i} alt="Project snapshot" src={imageContext(`./${key}_${i}.jpg`)} />
                );
            };
            let buttons = projects[key].tech.map((name) => {
                return (
                    <span key={name} className="button">
                        {name}
                    </span>
                );
            });

            slideConfig.left = !slideConfig.left;
            slideConfig.right = !slideConfig.right;

            textOrder^=demoOrder;
            demoOrder^=textOrder;
            textOrder^=demoOrder;

            let frame = projects[key].isPhone ? phoneFrame : laptopFrame;
            let margin = projects[key].isPhone ? phoneMargin : laptopMargin;
            return (
                <div key={key} className={`hero is-fullheight custom-hero ${styles.container}`}>
                    <div id={styles.newBreak} className={`columns ${wrapper}`}>
                        <div style={{order: textOrder}} className="column is-half">
                            <Fade when={self.state.animate} {...slideConfig}>
                                <div className={`${self.state.animate} container ${styles.textContainer}`}>
                                    <h3 className={`${styles.title}`}>{projects[key].title}</h3>
                                    <div className={`buttons ${styles.buttons}`}>
                                        {buttons}
                                    </div>
                                        <p className={styles.description}>{projects[key].description}</p>
                                    <br/>
                                    <div>
                                        <a href={projects[key].link} className={styles.viewBtn}>
                                           <FontAwesomeIcon icon={faCaretRight} /> View Project
                                        </a>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div style={{order: demoOrder,textAlign: "center"}} className="column">
                            <div style={{display:"inline-block", position: "relative"}}>
                                    <div className="is-overlay" style={{margin: margin}}>
                                        <PerfectScrollbar
                                            options={{suppressScrollX: true}}
                                            style={{ width: "100%", height: "100%" }}>
                                            <Slider {...sliderSettings} >
                                                {images}
                                            </Slider>
                                        </PerfectScrollbar>
                                    </div>
                                <img style={{display: "block", margin: "0 auto"}} src={frame} alt="Screen frame" />
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            this.components
        );
    }
}

export default Project;
