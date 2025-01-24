import "./COSMOS.css"
import COSMOS1 from "../images/cosmos-1.jpg"
import COSMOS2 from "../images/cosmos-2.jpg"

export default function Highlight2() {
    return (
        <div className="cosmos">
            <div className="section">
                <h3>California State Summer School for Mathematics and Science (Summer 2024)</h3>
                <p>This past summer, I worked as a teaching assistant for UCLA COSMOS Cluster 6: <a href="https://cosmos.ucla.edu/cluster-courses/cluster-6-from-medicine-to-hollywood-artificial-intelligence-for-speech-and-imagery/" target="_blank">From Medicine to Hollywood: Artificial Intelligence for Speech and Imagery</a>. Outside of class, I was a supervisor on lunch periods, breaks, and field trips and created <a href="https://www.instagram.com/cosmosucla/" target="_blank">social media content</a> for the cluster.</p>
            </div>

            <div className="images">
                <img src={COSMOS2}/>
            </div>
        </div>
    )
}
