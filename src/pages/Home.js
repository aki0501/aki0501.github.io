import Intro from "../components/Intro"
import EPIC from "../components/EPIC"
import AboutMe from "../components/AboutMe"
import COSMOS from "../components/COSMOS"
import FTV from "../components/FTV"
import Hackathons from "../components/Hackathons"

import "../App.css"

export default function Home() {
    return (
        <>
            <Intro/>
            <AboutMe/>
            <COSMOS/>
            <FTV/>
            <EPIC/>
            <Hackathons/>
        </>
    )
}
