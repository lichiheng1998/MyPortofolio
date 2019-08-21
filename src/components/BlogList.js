import React from "react";
import { monthDict, dates } from "../utils/timeUtils";
import { wrapper2 } from "./Planguages.module.css";
import BlogLink from "./BlogLink";
const BlogList = (props) => {
    let contents = props.contents.sort((a, b) => {
        return -dates.compare(new Date(a.time), new Date(b.time));
    });
    let converter = props.converter;
    let timeToBlogs = {};
    for(let i = 0; i < contents.length; i++){
        let date = new Date(contents[i].time);
        let dateString = date.getFullYear() + " " + date.getMonth();
        if(!timeToBlogs[dateString]){
            timeToBlogs[dateString] = [];
        }
        timeToBlogs[dateString].push({index: i, blog: contents[i]});
    }

    let components = Object.keys(timeToBlogs).map(key => {
        let monthAndDay = key.split(" ");
        let blogComponents = timeToBlogs[key].map(pack => {
            return (
                <BlogLink converter={converter} key={pack.blog.id} data={pack.blog} />
            );
        });
        return (
            <div key={key}>
                <div style={{margin: "15px 0"}}>
                    <span style={{textDecoration: "underline", color: "#3273dc"}} className={`${wrapper2} is-size-4`}>{monthAndDay[0] + " " + monthDict[monthAndDay[1]]}:</span>
                </div>
                {blogComponents}
            </div>
        );
    });

    return components;
}

export default BlogList;
