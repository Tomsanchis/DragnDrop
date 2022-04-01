const dragrabledivs = document.querySelectorAll(".dragable");
const drop = document.querySelector(".drop");

for (let i = 0; i < dragrabledivs.length; i++) {
  dragrabledivs[i].addEventListener("mousedown", () => {
    window.addEventListener("mousemove", (event) => {
      let mousex = event.clientX;
      let mousey = event.clientY;
      console.log(mousex, mousey);
    });
  });
  dragrabledivs[i].addEventListener("mouseup", () => {
    window.removeEventListener();
  });
}

// let creatediv = document.createElement("div");
// if (dragrabledivs[i] === dragrabledivs[0]) {
//   creatediv.className = "red";
// }
// if (dragrabledivs[i] === dragrabledivs[1]) {
//   creatediv.className = "blue";
// }
// if (dragrabledivs[i] === dragrabledivs[2]) {
//   creatediv.className = "green";
// }
// drop.appendChild(creatediv);
