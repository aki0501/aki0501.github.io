import Headshot from "../images/Headshot.jpg"
import "../App.css"

export default function Home() {
    return (
        <div className="container">
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