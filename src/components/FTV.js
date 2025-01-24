import "./FTV.css"
import FTV2 from "../images/FTV-2.jpg"

export default function Highlight3() {
    return (
        <div className="ftv">
                <div className="section">
                    <h3>UCLA Film & Television Summer Institute (Summer 2024)</h3>
                    <p>Participated in the UCLA Film & Television Summer Institute, where I was the editor for a student film. Completed several film classes toward my minor, including film editing and cinematography, where I learned Adobe Premiere Pro, After Effects, and DaVinci Resolve. </p>
                </div>
                
                <div className="more-images">
                    <img src={FTV2}/>
                </div>
        </div>
    )
}
