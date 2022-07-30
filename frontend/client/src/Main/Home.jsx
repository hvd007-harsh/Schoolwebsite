import React from "react";
import data from "../data/data";
import "./Main.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
const Home =()=>{ return (
    <div>
        <h1>Home</h1>
      <div>
        <Carousel>
            <div>
                <img  src={data.Home[0].img1} alt="LIBRARY" />
                <p className="legend">LIBRARY</p>
            </div>
            <div>
                <img src={data.Home[0].img2} alt="SCHOOL"/>
                <p className="legend">SCHOOL</p>
            </div>
            <div>
                <img src={data.Home[0].img3} alt="BOOKS" />
                <p className="legend">BOOKS</p>
            </div>
            <div>
                <img src={data.Home[0].img4} alt="SCIENCE" />
                <p className="legend">SCIENCE</p>
            </div>
        </Carousel>
      </div>
    </div>

)};

export default Home;