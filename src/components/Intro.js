import Headshot from "../images/Headshot.jpg"
import "./Intro.css"

export default function Intro() {
    return (
        <div className="intro">
            <div className="section">
                <h1>Welcome!</h1>
                <p>Hi, I'm Aki! thanks for visiting! website currently in progress...</p>
            </div>

            <div className="section">
                <img className="headshot" src={Headshot}/>
            </div>
        </div>
    )
}
