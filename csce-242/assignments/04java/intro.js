document.getElementById("click").onclick = () => {
  document.getElementById("p-message").innerHTML = "Hello!";
document.getElementById("p-message").style.display = "inline-block";
};

document.getElementById("cars").onchange = () => {
document.getElementById("car-type").innerHTML =document.getElementById("cars").value + ":   Good choice!";
}
document.getElementById("image-click").onclick = () => {
  document.getElementById("sticker").innerHTML = "🚗";
};