// Gets the road area from the HTML so cars can be added inside it
const roadArea = document.getElementById("road-area");

// Creates one car using the color and position given
const addCar = (color, left, top) => {
    const car = document.createElement("div");
    const carWindow = document.createElement("div");

    // Adds the CSS classes to style the car and its window
    car.classList.add("car");
    carWindow.classList.add("window");

    // Changes the car's color and random position
    car.style.backgroundColor = color;
    car.style.left = left + "px";
    car.style.top = top + "px";

    // Puts the window inside the car, then puts the car on the road
    car.append(carWindow);
    roadArea.append(car);
};

// Possible random colors for the cars
const colors = ["red", "blue", "green", "purple", "orange", "white"];

// Makes five cars when the page loads
for (let i = 0; i < 5; i++) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Random horizontal position, while keeping the car on the road
    const randomLeft = Math.random() * (roadArea.clientWidth - 70);

    // Chooses either the top lane or bottom lane
    const randomTop = Math.random() < 0.5
        ? Math.random() * 10
        : Math.random() * 10 + 60;

    // Sends the random information to the function to create a car
    addCar(randomColor, randomLeft, randomTop);
}