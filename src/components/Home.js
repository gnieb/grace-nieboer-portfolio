import React from "react";
import Contact from "./Contact";
import {ReactComponent as Instagram} from './instagram.svg'
import {ReactComponent as LinkedIn} from './linkedin-in.svg'


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
                <a>
                    github
                </a>
                <a>
                    blog
                </a>
            </div>
            <div>
                <button class="bg-transparent hover:bg-gray-500 text-white border border-gray-500 font-bold py-2 px-4 rounded-full">CONTACT ME</button>
            </div>
            
        </div>
    )
}
export default Home;