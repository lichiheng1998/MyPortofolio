import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Helmet from 'react-helmet';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { fab, fabActionButton, fabPinned, fabUnpinned } from '../components/Blog.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isAuthenticated } from "../utils/auth";
import BlogList from '../components/BlogList';
import { navigate } from "gatsby";
import "../../mystyles.scss";
import * as Showdown from "showdown";
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';

class blogs extends React.Component {
    _isMounted = false;
    constructor(){
        super();
        this.state = {
            isLoading: true,
            contents: [],
            footerStyle: { margin: 0 },
        }
        this.getComponent = this.getComponent.bind(this);
        this.onClick = this.onClick.bind(this);
        this.converter = new Showdown.Converter({
          tables: true,
          simplifiedAutoLink: true,
          strikethrough: true,
          tasklists: true
        });
    }

    getComponent(){
        if (this.state.contents.length === 0){
            let flag = this.state.isLoading
                ? <ReactLoading type="spin" color={"black"} />
                : "Oops, it seems like there is no posts up to this moment";
            return (
                <div style={{textAlign: "center"}} className="hero is-fullheight-with-navbar">
                    <span style={{display: "table", margin: "auto"}}>{flag}</span>
                </div>
            );
        } else {
            let blogList = (<BlogList converter={this.converter} contents={this.state.contents}/>);
            return (
                <div className="hero is-fullheight-with-navbar">
                    <div>
                        {blogList}
                    </div>
                </div>
            );
        }
    }

    componentDidMount(){
        this._isMounted = true;
        // grab an element
        var myElement = document.querySelector(".fab");
        // construct an instance of Headroom, passing the element
        var headroom  = new window.Headroom(myElement, {
          offset: 0,
          tolerance: 5,
          classes : {
              // when element is initialised
              initial : fab,
              // when scrolling up
              pinned : fabPinned,
              // when scrolling down
              unpinned : fabUnpinned
          }
        });

        headroom.init();
        fetch(`${process.env.API_DOMAIN}/posts`).then(results => {
            return results.json();
        }).then(data => {
            if(this._isMounted && data){
                toast.success("Blogs are loaded.", {
                    position: toast.POSITION.TOP_CENTER
                });
                if (data.length !== 0){
                    this.setState((prev) => {
                        prev.footerStyle = {};
                        prev.contents = data;
                        return prev;
                    });
                }
            };
        }).catch(err => {
            toast.error("Failed to fetch data.", {
                position: toast.POSITION.TOP_CENTER
            });
        }).finally(()=>{
            this.setState((prev) => {
                prev.isLoading = false;
                return prev;
            });
        });
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    onClick(){
        if(isAuthenticated()){
            navigate("/upload");
        } else {
            toast.warning("Please login in first.", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    render(){
        let thingToRender = this.getComponent();
        return (
            <div>
                <Helmet>
                    <style>{'html { background-color: #F4F7FC; }'}</style>
                </Helmet>
                <Navbar logo="Blogs"/>
                <div style={{
                    height: "3.25rem"
                }}/>
                <div style={{zIndex: 10}} className={`${fab}`}>
                  <span onClick={this.onClick} className={`fab ${fabActionButton}`}>
                        <FontAwesomeIcon icon={faPlus} />
                  </span>
                </div>
                {thingToRender}
                <Footer style={this.state.footerStyle}/>
            </div>
        )
    }
}

export default blogs;
