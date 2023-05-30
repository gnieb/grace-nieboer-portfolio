import {ReactComponent as LinkedIn} from './linkedin-in.svg'
import {ReactComponent as Envelope} from './envelope.svg'

export default function Contact () {
    return (
        <>
        <h1 className= "text-7xl">
            Looking to collaborate or meet for coffee?
        </h1>
        Shoot me a message on LinkedIn or via Email
        <a href="https://www.linkedin.com/in/gracenieboer/" target="_blank">
            <LinkedIn style={{height:"60px"}}/>
        </a>
        <a href="mailto:grace.nieboer@outlook.com">
            <Envelope style={{height:"60px"}}/>
        </a>


        </>
    )
}