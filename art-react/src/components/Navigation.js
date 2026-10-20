import "./Navigation.css";

function Navigation() {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <a href="./">Home</a>
                </li>
                <li>
                    <a href="https://ian-repik.github.io/csce-242/projects/gallery/index.html">
                        Gallery
                    </a>
                </li>
                <li>
                    <a href="https://ian-repik.github.io/csce-242/projects/inprogress/index.html">
                        In Progress
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;