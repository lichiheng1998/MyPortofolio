import React from "react";
import {wrapper} from "./Planguages.module.css";
import DevEnv from "./DevEnv";
import {android, web, ios, db} from "../models/libs";
import {faAndroid, faApple, faReact} from "@fortawesome/free-brands-svg-icons";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";
import Fade from 'react-reveal/Fade';

class Framework extends React.Component{
    constructor(){
        super();
        this.state = {
            animate: false
        }
    }

    componentDidMount(){
        this.setState({
            animate: true
        });
    }

    render(){
        return (
                [
                    <div key={1} style={{alignItems: "stretch"}} className={`${wrapper} columns`}>
                        <div className="column is-half">
                            <Fade when={this.state.animate} big>
                                <DevEnv color="is-success" icon={faReact} data={web} title="Web"/>
                            </Fade>
                        </div>
                        <div className="column is-half">
                            <Fade when={this.state.animate} big>
                                <DevEnv color="is-primary" icon={faAndroid} data={android} title="Android"/>
                            </Fade>
                        </div>
                    </div>,
                    <div key={2} style={{alignItems: "stretch"}} className={`${wrapper} columns`}>
                        <div className="column is-half">
                            <Fade when={this.state.animate} big>
                                <DevEnv color="is-danger" icon={faApple} data={ios} title="IOS"/>
                            </Fade>
                        </div>
                        <div className="column is-half">
                            <Fade when={this.state.animate} big>
                                <DevEnv color="is-link" icon={faDatabase} data={db} title="DataBase"/>
                            </Fade>
                        </div>
                    </div>
            ]
        );
    }
}

export default Framework;
