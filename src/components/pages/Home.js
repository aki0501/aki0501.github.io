import Intro from "../Intro"
import EPIC from "../EPIC"
import Highlight1 from "../highlight1"
import Highlight2 from "../highlight2"
import Highlight3 from "../highlight3"
import Footer from "../Footer.js"

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