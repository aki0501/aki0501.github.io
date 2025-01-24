import "./Hackathons.css"
import FTV1 from "../images/FTV-1.jpg"
import EPIC1 from "../images/EPIC-1.jpeg"
import MIT1 from "../images/mit-1.jpg"
import MIT2 from "../images/mit-2.jpg"

export default function MoreInfo() {
    return (
        <div class="moreinfo">
            <div className="section">
                <h3>Hackathons</h3>
                <p>I've also participated in several hackathons, including HackMIT, QWER Hacks, and IDEA Hacks.</p>
            </div>

            <div className="more-images">
                <img src={MIT1}/>
                <img src={MIT2}/>
            </div>
        </div>
    )
}
