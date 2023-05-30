import React from "react";
import {ReactComponent as Instagram} from './instagram.svg'

function Home () {


    return (
        <div className="home">
            <h1 className = "text-9xl" >HELLO World</h1>
            <div>
                <h1>get to know me</h1>
                <a href="https://www.instagram.com/grayce.elisabeth_/">
                    <Instagram style={{height:"30px"}}/>
                </a>
            </div>
            
        </div>
    )
}
export default Home;