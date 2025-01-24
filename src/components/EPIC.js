import "./EPIC.css"
import EPIC2 from "../images/EPIC-2.jpeg"

export default function EPIC() {
    return (
        <div className="epic">
            <div className="section">
            <h3>Engineers for Professional Inclusion Conference (2021-2022) </h3>
            <p>Freshman year of college, I had the opportunity to be co-chair of UCLA SWE Advocacy's flagship event, the <a href="https://advocacysweucla.wixsite.com/epic2022" target="_blank">Engineers for Professional Inclusion Conference</a> (EPIC). I worked on event planning, digital marketing, and moderated the panel of speakers during the event.</p>
            </div>

            <div className="images">
                <img src={EPIC2}/>
            </div>
        </div>
    )
}

