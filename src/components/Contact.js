import {ReactComponent as LinkedIn} from './linkedin-in.svg'
import {ReactComponent as Envelope} from './envelope.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact () {
    return (
        <>
        <h1 className= "text-7xl">
            Looking to collaborate or meet for coffee?
        </h1>
        Shoot me a message on LinkedIn or via Email
        <a href="https://www.linkedin.com/in/gracenieboer/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} style={{height:"60px",color: "#ffffff", margin:"10px"}}/>
        </a>
        <a href="mailto:grace.nieboer@outlook.com">
      
            <FontAwesomeIcon icon={faEnvelope} style={{height:"60px", color:"#ffffff", margin:"10px"}}/>
        </a>
        </>
    )
}