import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import burger from "./Navbar.module.css";
import {SlideDown} from 'react-slidedown';
import { Link } from "gatsby";
import { login, isAuthenticated, logout } from "../utils/auth";
import 'react-slidedown/lib/slidedown.css';

const activeStyle = {
    background: "#636363",
    color: "white"
}
class Navbar extends React.Component{
    constructor(){
        super();
        this.state = {
            isActive: false
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount(){
        // grab an element
        var myElement = document.querySelector(".headroom");
        // construct an instance of Headroom, passing the element
        var headroom  = new window.Headroom(myElement, {
          "offset": 305,
          "tolerance": 5
        });
        // initialise
        headroom.init();
    }

    clickHandler(event){
        this.setState((prev) => {
            return {
                isActive: !prev.isActive
            };
        });
    }

    render(){
        let button = isAuthenticated() ? (
            <span onClick={logout} className="button is-danger is-outlined">
              <span className="icon">
                <FontAwesomeIcon icon={faUserCircle} />
              </span>
              <span>Logout</span>
            </span>
        ) : (
            <span onClick={login} className="button is-success is-outlined">
              <span className="icon">
                <FontAwesomeIcon icon={faUserCircle} />
              </span>
              <span>Login</span>
            </span>
        );
        let extra = this.state.isActive ? "is-active" : "";
        return (
            <header style={{zIndex: 10}} className="headroom is-fixed-top">
                <nav className="navbar">
                <div className="navbar-brand">
                  <span className="navbar-item is-size-5">
                    <p style={{fontFamily: "'Roboto', sans-serif", fontWeight: 900}}>{this.props.logo || "Adam's Page"}</p>
                  </span>
                  <span className={`navbar-burger burger ${extra} ${burger}`} onClick={this.clickHandler} data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <SlideDown style={{width: "100%"}}>
                    <div id="navbarMenuHeroA" className={"navbar-menu " + extra}>
                      <div className="navbar-end has-text-centered">
                        <Link activeStyle={activeStyle} to="/" className="navbar-item is-active">
                          Home
                        </Link>
                        <Link activeStyle={activeStyle} to="/blogs" className="navbar-item">
                          Blog
                        </Link>
                        <span className="navbar-item is-paddingless">
                            <a className="button is-black is-inverted" href={this.props.resume.publicURL} download>
                                <span className="icon">
                                  <FontAwesomeIcon icon={faFilePdf} />
                                </span>
                                <span>Resume</span>
                            </a>
                        </span>
                        <span className="navbar-item  is-paddingless">
                          <a href="https://github.com/lichiheng1998" className="button is-link is-inverted">
                            <span className="icon">
                              <FontAwesomeIcon icon={faGithub} />
                            </span>
                            <span>Github</span>
                          </a>
                        </span>
                        <span className="navbar-item">
                          {button}
                        </span>
                      </div>
                    </div>
                    </SlideDown>
                </nav>
            </header>
        )
    }
}

export default Navbar;
