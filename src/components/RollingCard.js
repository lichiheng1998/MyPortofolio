import React from 'react';
import styles from "./Planguages.module.css";
import Stars from "./Stars";
import Img from 'gatsby-image';

const RollingCard = (props) => {
    return (
        <div className={`card ${styles.level}`}>
          <div className="card-image">
             <Img alt={props.name} fluid={props.img.node.childImageSharp.fluid}/>
          </div>
          <div className={`${styles.cardcontent}`}>
            <p style={{marginBottom: 10, fontWeight: 700}} className="subtitle is-6 is-size-7-mobile">{props.name}</p>
            <div className="content">
                <p className={`${styles.proficiency} is-size-7-mobile`}>Proficiency:</p>
                    <div className="content"><Stars isSpin num={props.num}/></div>
            </div>
          </div>
        </div>
    );
}

export default RollingCard;
