import React from 'react';
import styles from "./Planguages.module.css";
import RollingCard from "./RollingCard";
import languages from "../models/languages";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";

class Languages extends React.Component {
    constructor(){
        super();
        this.state = {
            render: false,
        };
        this.responsive = [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
        ];
        this.settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            responsive: this.responsive,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 2000,
            mobileFirst: true,
            arrows: false,
        }
    }

    componentDidMount(){
        this.setState({
            render: true
        });
    }

    render(){
        let component = null;
        if(this.state.render){
            component = Object.keys(languages).map((lang)=>{
                return (
                    <RollingCard key={lang} name={lang} num={languages[lang].proficiency} imgUrl={require(`../images/${lang}.png`)} />
                );
            });
        }

        return (
                <div className={styles.wrapper}>
                    <Fade when={this.state.render} big>
                        <Slider {...this.settings}>
                            {component}
                        </ Slider>
                    </Fade>
                </div>
        );
    }
}


export default Languages;
