import React from "react";
import { wrapper2 } from "./Planguages.module.css";
import { blogInfo, blogAnimate } from "./Blog.module.css";
import Blog from "./Blog"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBook, faEdit } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { isAuthenticated } from "../utils/auth";
import "./BlogAnimate.css";
import { toast } from 'react-toastify';
import { navigate } from "gatsby";

const desStyle = {
    backgroundColor: "whitesmoke",
    borderLeft: "5px solid #dbdbdb",
    padding: "0.75em 1.5em",
    fontStyle: "italic"
};

class BlogLink extends React.Component {
    constructor(){
        super();
        this.state = { isOpen: false };
        this.toggle = this.toggle.bind(this);
        this.toEditPage = this.toEditPage.bind(this);
    }
    toggle(){
        this.setState((prev) => {
            prev.isOpen = !prev.isOpen;
            return prev;
        });
    }

    toEditPage(){
        if(isAuthenticated()){
            navigate("/update", { state: {data: this.props.data} });
        } else {
            toast.warning("Please login in first.", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    render(){
        let data = this.props.data;
        let blogContent = this.state.isOpen ? <Blog converter={this.props.converter} data={data}/> : null;
        let buttonText = this.state.isOpen ? "Close" : "Read";
        let buttonIcon = this.state.isOpen ? faBookOpen : faBook;
        let time = new Date(data.time);
        time = time.toLocaleString();
        return (
            <Fade big>
                <div className={`${wrapper2} ${blogAnimate} box`}>
                    <strong className="is-size-4 is-size-5-mobile">{data.title}</strong>
                    <div className="columns is-vcentered is-marginless is-mobile">
                        <div className="column is-paddingless">
                            <div className={blogInfo}>
                                <strong style={{color: "#9C9C9C"}}>{data.author}</strong><br/><small style={{color: "#C0C0BE"}}>{time}</small>
                            </div>
                        </div>
                        <div className="column is-narrow">
                            <nav className="breadcrumb" aria-label="breadcrumbs">
                                  <ul>
                                    <li>
                                        <a onClick={this.toggle}>
                                          <span className="icon is-small">
                                                <FontAwesomeIcon icon={buttonIcon} />
                                          </span>
                                          <span>{buttonText}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={this.toEditPage}>
                                          <span className="icon is-small has-text-success">
                                                <FontAwesomeIcon icon={faEdit} />
                                          </span>
                                          <span className="has-text-success">Edit</span>
                                        </a>
                                    </li>
                                  </ul>
                            </nav>
                        </div>
                    </div>
                    <p style={desStyle}>{data.description}</p>
                    <ReactCSSTransitionGroup
                       transitionName="blog"
                       transitionEnterTimeout={800}
                       transitionLeaveTimeout={800}
                     >
                        {blogContent}
                    </ReactCSSTransitionGroup>
                </div>

            </Fade>
        );
    }
}
export default BlogLink;
