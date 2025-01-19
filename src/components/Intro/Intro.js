import Headshot from "../../images/Headshot.jpg"
import "./Intro.css"

export default function Intro() {
    return (
        <div className="intro">
            <div className="welcome">
                Welcome! Hi, I'm Aki.
                <img className="headshot" src={Headshot}/>
            </div>
            <ul className="content">
                thanks for visiting! website currently in progress...
            </ul>
        </div>
    )
}
