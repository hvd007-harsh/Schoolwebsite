import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter,faYoutube,faFacebook,faInstagram} from "@fortawesome/free-brands-svg-icons"
import React from "react";
import "./Footer.css";

const Footer =()=>{ 
    return (
    <div className="footer">
        <h5>ALL RIGHTS RESERVED @2022</h5> 
        <ul>
            <li>
               <FontAwesomeIcon icon={faTwitter} />
                Twitter 
            </li>
            <li>
               <FontAwesomeIcon icon={faFacebook} />
                Facebook
            </li>
            <li>
               <FontAwesomeIcon icon={faInstagram} />
                Instagram
            </li>
            <li>
               <FontAwesomeIcon icon={faYoutube} />
                Youtube
            </li>
        </ul>

    </div>
)};
export default Footer;