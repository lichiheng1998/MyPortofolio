import React from 'react';
import styles from "./Planguages.module.css";
import Stars from "./Stars";

class RollingCard extends React.Component {
    render(){
        return (
            <div className={`card ${styles.level}`}>
              <div className="card-image">
                <figure className="image is-square">
                  <img src={this.props.imgUrl} alt=""/>
                </figure>
              </div>
              <div className={`card-content ${styles.cardcontent}`}>
                <p style={{marginBottom: 10, fontWeight: 700}} className="subtitle is-6 is-size-7-mobile">{this.props.name}</p>
                <div className="content">
                    <p className={`${styles.proficiency} is-size-7-mobile`}>Proficiency:</p>
                        <div className="content"><Stars isSpin num={this.props.num}/></div>
                </div>
              </div>
            </div>
        );
    }
}

export default RollingCard;
