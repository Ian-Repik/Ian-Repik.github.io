
document.getElementById("btn-show-message").onclick = (e) =>{
    document.getElementById("p-message").innerHTML="Hello";
    e.target.innerHTML = "done!";
}
document.getElementById("link").onclick = (e) =>{
    e.preventDefault();
    e.target.classList.add ("cool-link" );
}
document.getElementById("ball").onclick = (e) =>{
    e.preventDefault();
    e.target.classList.toggle ("bouncing-ball" );
}