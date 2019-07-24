import React from "react";
import {wrapper} from "./Planguages.module.css";
import DevEnv from "./DevEnv";
import {android, web, ios, db} from "../models/libs";
import {faAndroid, faApple, faReact} from "@fortawesome/free-brands-svg-icons";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";
import Slide from 'react-reveal/Slide';

const Frameworks = () => {
    return (
            [
                    <div style={{alignItems: "stretch"}} className={`${wrapper} columns`}columns>
                        <Slide left>
                            <div className="column is-half">
                                <DevEnv color="is-success" icon={faReact} data={web} title="Web"/>
                            </div>
                        </Slide>
                        <Slide right>
                            <div className="column is-half">
                                <DevEnv color="is-primary" icon={faAndroid} data={android} title="Android"/>
                            </div>
                        </Slide>
                    </div>,
                    <div style={{alignItems: "stretch"}} className={`${wrapper} columns`}columns>
                        <Slide left>
                            <div className="column is-half">
                                <DevEnv color="is-danger" icon={faApple} data={ios} title="IOS"/>
                            </div>
                        </Slide>
                        <Slide right>
                            <div className="column is-half">
                                <DevEnv color="is-link" icon={faDatabase} data={db} title="DataBase"/>
                            </div>
                        </Slide>
                    </div>
        ]
    );
}

export default Frameworks;
