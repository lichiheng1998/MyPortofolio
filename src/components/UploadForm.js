import React from "react";
import { wrapper } from "./Planguages.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeading, faBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from "gatsby";
import ReactMde from "react-mde";

const UploadForm = (props) => {
    const [ selectedTab, setSelectedTab ] = React.useState("write");
    let buttonStyle = props.isLoading ? "is-loading" : ""
    return (
        <div className={`${wrapper}`}>
            <div style={{marginBottom: 0}} className="columns">
                <div style={{paddingTop: 0}} className="column is-one-quarter">
                    <label className="label">Title</label>
                    <div className="control has-icons-left">
                      <input name="title" onChange={props.handleInputChange} value={props.data.title} className="input" type="text" placeholder="Title of the post"/>
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faHeading} />
                      </span>
                    </div>
                </div>

                <div style={{paddingTop: 0}} className="column">
                    <label className="label">Description</label>
                    <div className="control has-icons-left">
                      <input name="description" onChange={props.handleInputChange} value={props.data.description} className="input" type="text" placeholder="More about the post"/>
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faBook} />
                      </span>
                    </div>
                </div>
            </div>
              <div className="field">
                <label className="label">Content</label>
                <ReactMde
                  value={props.data.content}
                  onChange={props.setContent}
                  selectedTab={selectedTab}
                  onTabChange={setSelectedTab}
                  generateMarkdownPreview={markdown =>
                    Promise.resolve(props.converter.makeHtml(markdown))
                  }
                />
              </div>
            <br />
            <div className="field is-grouped">
                <div className="control">
                  <button onClick={props.handleSubmit} className={`button ${buttonStyle} is-link`}>Submit</button>
                </div>
                <div className="control">
                  <button className="button is-text"><Link to="/blogs">Cancel</Link></button>
                </div>
            </div>
        </div>
    );
}

export default UploadForm;
