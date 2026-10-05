/* Ian Repik - Vacation Class Assignment */

class Vacation {
    constructor(title, type, description, thingsToDo, image, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.image = image;
        this.mapSrc = mapSrc;
    }

    /* This creates and returns one vacation card */
    getCard() {
        const vacation = document.createElement("section");
        vacation.classList.add("vacation");

        const title = document.createElement("h2");
        title.innerHTML = this.title;

        const type = document.createElement("p");
        type.innerHTML = this.type + " Vacation";

        const image = document.createElement("img");
        image.src = this.image;
        image.alt = this.title;

        vacation.append(title);
        vacation.append(type);
        vacation.append(image);

        /* Opens this vacation's popup when clicked */
        vacation.onclick = () => {
            this.showModal();
        };

        return vacation;
    }

    /* Adds this vacation's information into the popup */
    showModal() {
        document.getElementById("modal-title").innerHTML = this.title;
        document.getElementById("modal-type").innerHTML = this.type;
        document.getElementById("modal-description").innerHTML =
            this.description;
        document.getElementById("modal-things").innerHTML =
            this.thingsToDo;
        document.getElementById("modal-map").src = this.mapSrc;

        document.getElementById("vacation-modal").style.display = "block";
    }
}

/* Array of Vacation objects */
const vacations = [
    new Vacation(
        "Asheville",
        "Mountain",
        "A creative North Carolina city surrounded by the Blue Ridge Mountains.",
        "Visit Biltmore Estate, hike, visit art galleries, and try local food.",
        "images/asheville.jpg",
        "https://www.google.com/maps?q=Asheville+NC&output=embed"
    ),

    new Vacation(
        "Boone",
        "Mountain",
        "A scenic mountain town with beautiful views and outdoor activities.",
        "Hike Grandfather Mountain, walk downtown, and visit Appalachian State.",
        "images/boone.jpg",
        "https://www.google.com/maps?q=Boone+NC&output=embed"
    ),

    new Vacation(
        "Hot Springs",
        "Mountain",
        "A small town in the mountains with natural mineral springs.",
        "Relax in hot springs, hike, raft the river, and camp.",
        "images/hot-springs.jpg",
        "https://www.google.com/maps?q=Hot+Springs+NC&output=embed"
    ),

    new Vacation(
        "Table Rock",
        "Mountain",
        "A South Carolina state park with a mountain, lake, and trails.",
        "Hike to the summit, swim, fish, and camp.",
        "images/table-rock.jpg",
        "https://www.google.com/maps?q=Table+Rock+State+Park+SC&output=embed"
    ),

    new Vacation(
        "Edisto Beach",
        "Beach",
        "A peaceful South Carolina beach with nature and wide sandy shores.",
        "Visit Botany Bay, ride bikes, fish, and relax on the beach.",
        "images/edisto-beach.jpg",
        "https://www.google.com/maps?q=Edisto+Beach+SC&output=embed"
    ),

    new Vacation(
        "Pawleys Island",
        "Beach",
        "A relaxing South Carolina beach known for dunes and seafood.",
        "Paddleboard, visit Brookgreen Gardens, swim, and eat seafood.",
        "images/pawleys-island.jpg",
        "https://www.google.com/maps?q=Pawleys+Island+SC&output=embed"
    )
];

/* Loops through the array and places every card on the page */
const vacationList = document.getElementById("vacation-list");

for (let i = 0; i < vacations.length; i++) {
    vacationList.append(vacations[i].getCard());
}

/* Closes modal when X is clicked */
document.getElementById("close-modal").onclick = () => {
    document.getElementById("vacation-modal").style.display = "none";
};

/* Closes modal if user clicks outside of popup */
window.onclick = (event) => {
    const modal = document.getElementById("vacation-modal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
};