import React from "react";
import { wrapper2 } from "./Planguages.module.css";
import { blogInfo, blogAnimate } from "./Blog.module.css";
import Blog from "./Blog"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBook } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "./BlogAnimate.css";

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
    }

    toggle(){
        this.setState((prev) => {
            prev.isOpen = !prev.isOpen;
            return prev;
        });
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
                    <div className="columns is-vcentered is-marginless is-mobile">
                        <div className="column is-paddingless">
                            <strong className="is-size-4 is-size-5-mobile">{data.title}</strong>
                            <div className={blogInfo}>
                                <strong style={{color: "#9C9C9C"}}>{data.author}</strong> <small style={{color: "#C0C0BE"}}>{time}</small>
                            </div>
                        </div>
                        <div className="column is-narrow">
                            <div onClick={this.toggle} className="button is-link is-rounded level-item">
                                <span className="is-size-7">{buttonText}</span>
                                <span className="icon">
                                    <FontAwesomeIcon icon={buttonIcon} />
                                </span>
                            </div>
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
