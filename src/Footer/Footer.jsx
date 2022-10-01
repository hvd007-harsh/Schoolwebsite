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
               <FontAwesomeIcon className="twitter" icon={faTwitter} fade /> 
            </li>
            <li>
               <FontAwesomeIcon className="facebook" icon={faFacebook} fade />
            </li>
            <li>
               <FontAwesomeIcon className="instagram" icon={faInstagram} fade />
            </li>
            <li>
               <FontAwesomeIcon className="youtube" icon={faYoutube} fade />
            </li>
        </ul>

    </div>
)};
export default Footer;