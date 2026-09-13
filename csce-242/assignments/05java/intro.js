document.getElementById("click").onclick = (e) => {
  document.getElementById("p-message").innerHTML = "Hello";
  e.target.innerHTML = "done!";
}