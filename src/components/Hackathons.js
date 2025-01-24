import "./Hackathons.css"
import MIT1 from "../images/mit-1.jpg"
import MIT2 from "../images/mit-2.jpg"
import HACK3 from "../images/HACK-3.jpg"
import HACK4 from "../images/HACK-4.jpg"

export default function MoreInfo() {
    return (
        <div class="moreinfo">
            <div className="section">
                <h3>Hackathons</h3>
                <p>I've also participated in several hackathons, including <a href="https://github.com/aki0501/hack-mit" target="_blank">HackMIT</a>, <a href="https://github.com/aki0501/priMDe" target="_blank">QWER Hacks</a>, and <a href="https://github.com/aki0501/idea-hacks" target="_blank">IDEA Hacks</a>.</p>
            </div>

            <div className="more-images">
                <img src={MIT1}/>
                <img src={MIT2}/>
                <img src={HACK3}/>
                <img src={HACK4}/>
            </div>
        </div>
    )
}
