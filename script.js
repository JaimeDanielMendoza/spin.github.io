let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(90);

btn.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(90);
}