import "./Header.css"
import logo from "..//../assets/logo.png"
import logo1 from "../../assets/menu.png"
export default function Header() {
    return <>
        <header>
            <nav className="navbar">
                <img src={logo} alt="" />
                <div className="obshdiv">
                    <ul>
                        <li>Booking</li>
                        <li>Facilities</li>
                        <li>About Us</li>
                        <li>Location</li>
                        <li>Contact</li>
                    </ul>
                    <div className="divbutton">
<img src={logo1} alt="" />
                        <button className="button1">Sign in</button>
                        </div>
                </div>

            </nav>
        </header>
    </>
}
