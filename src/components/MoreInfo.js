import "./MoreInfo.css"
import FTV1 from "../images/FTV-1.jpg"
import EPIC1 from "../images/EPIC-1.jpeg"

export default function MoreInfo() {
    return (
        <div class="moreinfo">
            <h3>More pictures</h3>
            <div className="more-images">
                <img src={FTV1}/>
                <img src={EPIC1}/>
                <img src={EPIC1}/>
                <img src={EPIC1}/>
                <img src={EPIC1}/>
            </div>
        </div>
    )
}
