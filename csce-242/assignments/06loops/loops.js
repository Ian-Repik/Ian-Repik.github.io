const roadArea = document.getElementById("road-area");


function addCar(color, left, top) {
    const car = document.createElement("div");
    const window = document.createElement("div");

    car.classList.add("car");
    window.classList.add("window");

    car.style.backgroundColor = color;
    car.style.left = left + "px";
    car.style.top = top + "px";

    car.append(window);
    roadArea.append(car);
}
const colors = ["red", "blue", "green", "purple", "orange", "white"];

for (let i = 0; i < 5; i++) {
    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    const randomLeft =
        Math.random() * (roadArea.clientWidth - 70);

    const randomTop = Math.random() < 0.5
        ? Math.random() * 10
        : Math.random() * 10 + 60;

    addCar(randomColor, randomLeft, randomTop);
}
