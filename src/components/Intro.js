import Headshot from "../images/Headshot.jpg"
import "./Intro.css"

export default function Intro() {
    return (
        <div className="intro">
            <div className="section">
                <div className="text">
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <h1>Welcome!</h1>
                    <p>My name is Aki, thank you for visiting my website!</p>
                </div>
            </div>

            <div className="section">
                <img className="headshot" src={Headshot}/>
            </div>
        </div>
    )
}
