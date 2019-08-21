import React from "react";
import { login, isAuthenticated, tokens , getProfile } from "../utils/auth";
import { toast } from 'react-toastify';
import Helmet from 'react-helmet';
import Navbar from "../components/Navbar";
import UploadForm from "../components/UploadForm";
import * as Showdown from "showdown";

class Upload extends React.Component {
    _isMounted = false;
    constructor(){
        super();
        this.converter = new Showdown.Converter({
          tables: true,
          simplifiedAutoLink: true,
          strikethrough: true,
          tasklists: true
        });

        this.state = {
            data: {
                author: getProfile().nickname,
                title: "",
                content: "",
                description: "",
            },
            isLoading: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setContent = this.setContent.bind(this);
        this.checkValidity = this.checkValidity.bind(this);
    }

    handleInputChange(event){
        event.persist();
        this.setState((prev) => {
            (prev.data)[event.target.name] = event.target.value;
            return prev;
        })
    }

    setContent(value){
        this.setState((prev) => {
            prev.data.content = value;
            return prev;
        })
    }

    componentDidMount(){
        this._isMounted = true;
    }

    checkValidity(){
        let isValid = Object.values(this.state.data).reduce((a, b)=>{
            return a && b;
        });
        return isValid
    }

    handleSubmit(event){
        if (event) {
            event.preventDefault();
        }

        if (this.state.isLoading) {
            return;
        }
        if(!this.checkValidity()){
            toast.error("All fields should be filled!", {
                position: toast.POSITION.TOP_CENTER
            });
            return;
        }

        this.setState((prev) => {
            prev.isLoading = true;
            return prev;
        })
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'http://ec2-18-222-3-141.us-east-2.compute.amazonaws.com:5000/upload', true);

        //Send the proper header information along with the request
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.setRequestHeader("Authorization", `Bearer ${tokens.accessToken}`);
        let self = this;
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4){
                if (self._isMounted) {
                    self.setState((prev) => {
                        prev.isLoading = false;
                        return prev;
                    })
                }
                if (this.status === 200) {
                    toast.success("Upload the post successfully!", {
                        position: toast.POSITION.TOP_CENTER
                    });
                } else {
                    toast.error("Can't upload!", {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            }
        };

        xhttp.send(JSON.stringify(this.state.data));
    }

    render(){
        if (!isAuthenticated()) {
            login();
            return <p>Redirecting to login...</p>
        }
        return (
            <div>
                <Navbar logo="Upload New Post"/>
                <Helmet htmlAttributes={{style: 'background-color : whitesmoke'}}/>
                <div style={{justifyContent: "center"}} className=" hero is-flex section is-fullheight">
                    <div style={{
                        height: "3.25rem"
                    }}/>
                    <UploadForm
                        handleInputChange={this.handleInputChange}
                        handleSubmit={this.handleSubmit}
                        setContent={this.setContent}
                        data={this.state.data}
                        isLoading={this.state.isLoading}
                        converter={this.converter}
                    />
                </div>
            </div>
        );
    }
}

export default Upload;
