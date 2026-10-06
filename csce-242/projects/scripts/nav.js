const toggleNav = document.getElementById("toggle-nav");
const mainNav = document.getElementById("main-nav");

if (toggleNav && mainNav) {
    toggleNav.onclick = () => {
        mainNav.classList.toggle("showing");

        if (mainNav.classList.contains("showing")) {
            toggleNav.innerHTML = "▲ Close Menu";
        } else {
            toggleNav.innerHTML = "☰ Menu";
        }
    };
}