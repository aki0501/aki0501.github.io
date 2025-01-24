import "./COSMOS.css"
import COSMOS1 from "../images/cosmos-1.jpg"
import COSMOS2 from "../images/cosmos-2.jpg"

export default function Highlight2() {
    return (
        <div className="cosmos">
            <div className="section">
                <h3>California State Summer School for Mathematics and Science (COSMOS) </h3>
                <p>A bunch of text. A bunch of text.A bunch of text.A bunch of text.A bunch of text.A bunch of text.A bunch of text.A bunch of text.A bunch of text.A bunch of text.A bunch of text.A bunch of text.</p>
            </div>

            <div className="images">
                <img src={COSMOS2}/>
            </div>
        </div>
    )
}
