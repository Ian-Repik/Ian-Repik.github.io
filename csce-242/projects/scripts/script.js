const popup = document.getElementById("art-popup");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const popupLink = document.getElementById("popup-link");

const artLinks = document.querySelectorAll(".art-link");

artLinks.forEach((link) => {
    link.onclick = (e) => {
        e.preventDefault();

        const card = link.parentElement;

        popupTitle.innerHTML = card.querySelector("h3 a").innerHTML;

        popupDescription.innerHTML =
            card.querySelector(".art-description").innerHTML;

        popup.style.display = "flex";
        
        popupTitle.textContent = card.querySelector("h3 a").textContent;
        popupLink.href = card.querySelector("h3 a").href;
    };
});

popup.onclick = (e) => {
    if (e.target == popup) {
        popup.style.display = "none";
    }
};
