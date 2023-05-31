import React from "react";
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from "react-router-dom";


function Home () {

    return (
        <div className="home">
            <h1 className = "text-xxl" >HELLO World</h1>
            <div>
                <h1>get to know me</h1>
                <a href="https://www.instagram.com/grayce.elisabeth_/" >
                    <FontAwesomeIcon icon={faInstagram} style={{height:"30px", color: "#ffffff",}} />
                </a>
                <a href="https://www.linkedin.com/in/gracenieboer/"> 
                    <FontAwesomeIcon icon={faLinkedin} style={{height:"30px",color: "#ffffff",}}/>
                </a>
                <a href="https://github.com/gnieb">
                <FontAwesomeIcon icon={faGithub} style={{height:"30px",color: "#ffffff",}} />
                </a>
                <a href="https://medium.com/@grace.nieboer">
                <FontAwesomeIcon icon={faMedium} style={{height:"30px",color: "#ffffff",}}/>
                </a>
            </div>
            <div>
                <NavLink
                to="/contact"
                exact
                className="bg-transparent hover:bg-gray-500 text-white border border-gray-500 font-bold py-2 px-4 rounded-full">
                    CONTACT ME
                </NavLink>
            </div>
            
        </div>
    )
}
export default Home;