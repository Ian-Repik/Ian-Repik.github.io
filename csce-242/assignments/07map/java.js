//These are skate stores starting in Columbia and moving farther out
const skateStores = {
    "Bluetile Skate Shop - Columbia":
        "https://www.google.com/maps?q=Bluetile+Skate+Shop+Columbia+SC&output=embed",

    "Blazer Skate and Moto - Greenville":
        "https://www.google.com/maps?q=Blazer+Skate+and+Moto+Greenville+SC&output=embed",

    "Bluetile Skate Shop - Charleston":
        "https://www.google.com/maps?q=Bluetile+Skate+Shop+Charleston+SC&output=embed",

    "Parrot Surf and Skate - Mount Pleasant":
        "https://www.google.com/maps?q=Parrot+Surf+and+Skate+Mount+Pleasant+SC&output=embed"
};

//These are skate spots starting in Columbia and moving farther out
const skateSpots = {
    "Owens Field Skate Park - Columbia":
        "https://www.google.com/maps?q=Owens+Field+Skate+Park+Columbia+SC&output=embed",

    "Friarsgate Skate Park - Irmo":
        "https://www.google.com/maps?q=Friarsgate+Skate+Park+Irmo+SC&output=embed",

    "Red River DIY Skatepark - Rock Hill":
        "https://www.google.com/maps?q=Red+River+DIY+Skatepark+Rock+Hill+SC&output=embed",

    "SK8 Charleston":
        "https://www.google.com/maps?q=SK8+Charleston+SC&output=embed"
};

//This runs when the user changes the destination type
document.getElementById("destination-type").onchange = (e) => {
    const selectedType = e.target.value;
    const destinationLinks =
        document.getElementById("destination-links");
    const map = document.getElementById("map");

    //This clears the links and hides the old map
    destinationLinks.innerHTML = "";
    map.classList.add("hidden");
    map.src = "";

    let destinations;

    //This decides which associative array should be used
    if(selectedType === "stores") {
        destinations = skateStores;
    } else if(selectedType === "spots") {
        destinations = skateSpots;
    } else {
        return;
    }

    //This creates a link for every destination in the array
    for(let destinationName in destinations) {
        const destinationLink = document.createElement("a");

        destinationLink.innerHTML = destinationName;
        destinationLink.href = "#";

        //This shows the map when a destination is clicked
        destinationLink.onclick = (e) => {
            e.preventDefault();

            map.src = destinations[destinationName];
            map.classList.remove("hidden");
        };

        destinationLinks.append(destinationLink);
    }
};