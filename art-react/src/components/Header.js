import "./Header.css";
import Navigation from "./Navigation";
import dragon from "./images/Firefly_RemoveBackground.png";

function Header() {
    return (
        <header className="main-header">
            <div className="header-content">
                <h1>Ian Repik's Art</h1>
                <Navigation />
            </div>

            <img
                className="header-dragon"
                src={dragon}
                alt="Medieval dragon breathing fire"
            />
        </header>
    );
}

export default Header;