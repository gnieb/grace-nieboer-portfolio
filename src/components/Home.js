import React from "react";
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from "react-router-dom";


function Home () {

    return (
        <div className = "m-6 p-4">
            <div className=" text-3xl sm:text-[40px]">
                I AM A PASSIONATE DEVELOPER WITH A LOVE FOR FINDING CREATIVE SOLUTIONS THAT MAKE THE WORLD BETTER. OH, AND I'M A COFFEE FIEND.
            </div>
            <div className = "object-center row-span-2 col-span-3  ">
                <p className = "text-[30px] font-display">creative architect</p>
                <p className="text-[150px] lg:text-[250px] font-display font-extrabold">DEV</p>
                <p></p>
                <NavLink
                to="/contact"
                exact
                className="bg-transparent hover:bg-gray-300 text-white border text-2xl border-gray-500 font-bold py-4 px-8 rounded-full ">
                    CONTACT ME
                </NavLink>
            </div>
              
            <div className = "row-span-2 ">
                <p className = "text-[30px] font-bold">get to know me</p>
                    <a className="mx-2" href="https://www.instagram.com/grayce.elisabeth_/" >
                        <FontAwesomeIcon icon={faInstagram} style={{height:"30px", color: "#ffffff",}} />
                    </a>
                    <a className="mx-2" href="https://www.linkedin.com/in/gracenieboer/"> 
                        <FontAwesomeIcon icon={faLinkedin} style={{height:"30px",color: "#ffffff",}}/>
                    </a>
                    <a className="mx-2" href="https://github.com/gnieb">
                        <FontAwesomeIcon icon={faGithub} style={{height:"30px",color: "#ffffff",}} />
                    </a>
                    <a className="mx-2" href="https://medium.com/@grace.nieboer">
                        <FontAwesomeIcon icon={faMedium} style={{height:"30px",color: "#ffffff",}}/>
                    </a>
                </div>
            <div className="">
                
            </div>
            
        </div>
    )
}
export default Home;