import Intro from "../components/Intro"
import EPIC from "../components/EPIC"
import AboutMe from "../components/AboutMe"
import COSMOS from "../components/COSMOS"
import FTV from "../components/FTV"
import MoreInfo from "../components/MoreInfo"

import "../App.css"

export default function Home() {
    return (
        <>
            <Intro/>
            <AboutMe/>
            <COSMOS/>
            <FTV/>
            <EPIC/>
            <MoreInfo/>
        </>
    )
}
