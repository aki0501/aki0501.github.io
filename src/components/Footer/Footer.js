import "./Footer.css"
import GitHub from "../../images/github.svg"
import LinkedIn from "../../images/linkedin.svg"
import Mail from "../../images/mail.svg"

export default function Footer() {
    return (
        <div className="footer">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/aki-hasegawa-johnson-302787229/" target="_blank" className="nav_icon"><img src={LinkedIn} /></a>
                </li>
                <li>
                    <a href="https://github.com/aki0501" target="_blank" className="nav_icon"><img src={GitHub} /></a>
                </li>
                <li>
                    <a href="mailto:aki0501@g.ucla.edu" target="_blank" className="nav_icon"><img src={Mail} /></a>
                </li>
            </ul>
        </div>
    )
}

