import Intro from "../Intro/Intro"
import EPIC from "../EPIC/EPIC"
import Highlight1 from "../Highlight1/highlight1"
import Highlight2 from "../Highlight2/highlight2"
import Highlight3 from "../Highlight3/highlight3"
import Footer from "../Footer/Footer.js"

import "../../App.css"

export default function Home() {
    return (
        <>
            <Intro/>
            <Highlight1/>
            <Highlight2/>
            <Highlight3/>
            <EPIC/>
            <Footer/>
        </>
    )
}