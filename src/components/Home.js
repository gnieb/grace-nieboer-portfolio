import React from "react";
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from "react-router-dom";


function Home () {

    return (
        
        <div className="grid grid-rows-3  gap-2">
            <div className = "object-center row-span-2 col-span-3 text-[150px] lg:text-[250px] font-display font-extrabold space-y-0 ">
                <p className="text-[30px]">creative architect</p>
                <p>DEVELOPER</p>
                <p></p>
            </div>
              
            <div className="row-span-2">
                <div className="  text-xl font-bold">get to know me</div>
                    <a className="" href="https://www.instagram.com/grayce.elisabeth_/" >
                        <FontAwesomeIcon icon={faInstagram} style={{height:"30px", color: "#ffffff",}} />
                    </a>
                    <a className="" href="https://www.linkedin.com/in/gracenieboer/"> 
                        <FontAwesomeIcon icon={faLinkedin} style={{height:"30px",color: "#ffffff",}}/>
                    </a>
                    <a className="" href="https://github.com/gnieb">
                        <FontAwesomeIcon icon={faGithub} style={{height:"30px",color: "#ffffff",}} />
                    </a>
                    <a className="" href="https://medium.com/@grace.nieboer">
                        <FontAwesomeIcon icon={faMedium} style={{height:"30px",color: "#ffffff",}}/>
                    </a>
                </div>
            <div className="">
                <NavLink
                to="/contact"
                exact
                className="bg-transparent hover:bg-gray-500 text-white border text-xl border-gray-500 font-bold py-4 px-8 rounded-full ">
                    CONTACT ME
                </NavLink>
            </div>
        </div>
    )
}
export default Home;