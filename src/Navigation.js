import "./App.css"
import GitHub from "./images/github.svg"
import LinkedIn from "./images/linkedin.svg"

export default function Navbar() {
    return (
    <nav className="nav">
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/aki-hasegawa-johnson-302787229/" target="_blank" className="nav_icon"><img src={LinkedIn} /></a>
            </li>
            <li>
                <a href="https://github.com/aki0501" target="_blank" className="nav_icon"><img src={GitHub} /></a>
            </li>
        </ul>
    </nav>
    )
}
