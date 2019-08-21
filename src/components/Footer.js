import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin, faWeixin } from '@fortawesome/free-brands-svg-icons';
import QRcode from "../images/QRcode.jpg";
import LightSpeed from 'react-reveal/LightSpeed';

export default class Footer extends React.Component{
    constructor(){
        super();
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount(){
        this.wechat = document.querySelector("#weixin");
    }
    toggle(){
        this.wechat.classList.toggle("is-active");
    }
    render(){
        return (
            <footer style={this.props.style} className={`section has-text-centered ${styles.footer}`}>
              <div className={`${styles.icons}`}>
                <LightSpeed right>
                    <a href="https://github.com/lichiheng1998"><FontAwesomeIcon className={styles.icon} icon={faGithub} /></a>
                    <a href="https://www.facebook.com/profile.php?id=100010010053738"><FontAwesomeIcon className={styles.icon} icon={faFacebook} /></a>
                    <a href="www.linkedin.com/in/chiheng-li-b6663a18b"><FontAwesomeIcon className={styles.icon} icon={faLinkedin} /></a>
                    <FontAwesomeIcon onClick={this.toggle} className={styles.icon} icon={faWeixin} />
                </LightSpeed>
              </div>
                <span className={styles.email}></span>
                <br/>
                <span className={styles.name}>{"Chiheng Li © 2019, Crafted with "}
                <a href="https://reactjs.org/">react</a> and <a href="https://bulma.io/">bulma</a></span>
                <div id="weixin" className="modal">
                  <div className="modal-background"></div>
                  <div className="modal-content">
                    <p className="image is-3by3">
                      <img src={QRcode} alt="My wechat QRcode"/>
                    </p>
                  </div>
                  <button className="modal-close is-large" onClick={this.toggle} aria-label="close"></button>
                </div>
            </footer>
        );
    }
}
