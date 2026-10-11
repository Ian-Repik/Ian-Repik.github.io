const getArt = async () => {
    const url = "https://ian-repik.github.io/csce-242/projects/scripts/art.json";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Could not load artwork.");
        }

        const artwork = await response.json();
        displayArt(artwork);
    } catch (error) {
        document.getElementById("gallery-message").innerHTML =
            "Sorry, the artwork could not load.";
    }
};

const displayArt = (artwork) => {
    const gallery = document.getElementById("gallery");

    gallery.innerHTML = "";

    artwork.forEach((art) => {
        const section = document.createElement("section");
        section.classList.add("art-piece");

        const link = document.createElement("a");
        link.href = "../" + art.link;

        const image = document.createElement("img");
        image.src = "../" + art.img_name;
        image.alt = art.title;

        const title = document.createElement("h3");
        title.innerHTML = art.title;

        const medium = document.createElement("p");
        medium.innerHTML = "Medium: " + art.medium;

        const year = document.createElement("p");
        year.innerHTML = "Year: " + art.year;

        const description = document.createElement("p");
        description.innerHTML = art.description;

        link.append(image);
        section.append(link);
        section.append(title);
        section.append(medium);
        section.append(year);
        section.append(description);

        gallery.append(section);
    });
};

getArt();