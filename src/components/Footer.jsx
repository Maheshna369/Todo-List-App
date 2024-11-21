import React from "react";
import logo from '../assets/reactIcon.png';
const Footer=()=>{
    return(
        <div className="footer-container">
            <h4>A Fully React App <img src={logo} alt="" /> </h4>
            <h4>&copy; 2024 Maphy, Inc </h4>
        </div>
    )
}
export default Footer;