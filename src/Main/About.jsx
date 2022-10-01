import React from "react";
import data from "../data/data";

const About =()=>{ return (
    <div>
        <h1>About</h1>
        <div>{data.About[0].text}</div>
    </div>
)};

export default About;