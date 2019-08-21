import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import eduList from "../models/educations";
import expList from "../models/experiences";
import Events from "./Events";
import Title from "./Title";

const MyTimeline = () => {
    let component = eduList.map((education) => {
        let description = education.description ? <p>{education.description}</p> : null;
        return (
            <VerticalTimelineElement
              key={education.id}
              className="vertical-timeline-element--work"
              date={education.date}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontSize: 24}}
              icon={education.icon}
            >
              <h3 className="vertical-timeline-element-title subtitle">{education.role}</h3>
              <h4 className="vertical-timeline-element-subtitle">{education.organization}</h4>
              {description}
              <p style={{fontWeight: 600}}>{education.grade}</p>
                <Events events={expList[education.id]}/>
            </VerticalTimelineElement>
        );
    });

    return (
        <div className="section" style={{backgroundColor: "#eee", zIndex: 2}}>
            <Title title="Education Background and Experiences" />
                <VerticalTimeline style={{margin: "0 auto"}}>
                    {component}
                </VerticalTimeline>
        </div>
    );
}

export default MyTimeline;
