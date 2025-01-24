import GitHub from "../images/github.svg"
import LinkedIn from "../images/linkedin.svg"
import Mail from "../images/mail.svg"

export default function Contact() {
    return (
    <ul>
        <li>
            <a href="https://www.linkedin.com/in/aki-hasegawa-johnson-302787229/" target="_blank" className="nav_icon"><img src={LinkedIn} /></a>
        </li>
        <li>
            <a href="https://github.com/aki0501" target="_blank" className="nav_icon"><img src={GitHub} /></a>
        </li>
    </ul>
    )
}