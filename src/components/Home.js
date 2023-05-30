import React from "react";
import {ReactComponent as Instagram} from './instagram.svg'
import {ReactComponent as LinkedIn} from './linkedin-in.svg'
import {ReactComponent as Github} from './github.svg'
import {ReactComponent as Medium} from './medium.svg'
import { NavLink } from "react-router-dom";


function Home () {

    return (
        <div className="home">
            <h1 className = "text-9xl" >HELLO World</h1>
            <div>
                <h1>get to know me</h1>
                <a href="https://www.instagram.com/grayce.elisabeth_/">
                    <Instagram style={{height:"30px"}}/>
                </a>
                <a href="https://www.linkedin.com/in/gracenieboer/"> 
                    <LinkedIn style = {{height:"30px"}} />
                </a>
                <a href="https://github.com/gnieb">
                    <Github style={{height:"30px"}}/>
                </a>
                <a href="https://medium.com/@grace.nieboer">
                    <Medium style={{height:"30px"}} />
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