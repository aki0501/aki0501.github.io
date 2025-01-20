import Intro from "../components/Intro"
import EPIC from "../components/EPIC"
import Highlight1 from "../components/highlight1"
import Highlight2 from "../components/highlight2"
import Highlight3 from "../components/highlight3"

import "../App.css"

export default function Home() {
    return (
        <>
            <Intro/>
            <Highlight1/>
            <Highlight2/>
            <Highlight3/>
            <EPIC/>
        </>
    )
}
