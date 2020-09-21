const fieldRef = document.querySelector("#field");
const ballRef = document.querySelector("#ball");
const putinRef = document.querySelector("#putin");
const lukaRef = document.querySelector("#luka");
const counterRef = document.querySelector(".counter");
const recordRef = document.querySelector(".record");
const img = document.createElement("img");
const contRef = document.querySelector(".container");
const textRef = document.querySelector("h1");
img.src =
  "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iOLWRVAe_pZg/v1/1000x-1.jpg";

img.style.width = "500px";

const moveTheBall = (event) => {
  let x = event.pageX;
  let y = event.pageY;
  x -= 40;
  y -= 40;
  ballRef.style.transform = `translate(${x}px, ${y}px)`;
  counterRef.textContent++;
  textRef.textContent = "";
};

fieldRef.addEventListener("click", moveTheBall);

setInterval(
  function () {
    putinRef.style.transform = `translate(${Math.floor(
      Math.random() * 800 + 1
    )}px, ${Math.floor(Math.random() * 500 + 1)}px)`;
  },

  500
);
setInterval(function () {
  lukaRef.style.transform = `translate(${Math.floor(
    Math.random() * 800 + 1
  )}px, ${Math.floor(Math.random() * 500 + 1)}px)`;
}, 500);

const matchPutin = () => {
  if (isTouching(ballRef, putinRef)) {
    alert("Putin caught you!");
    startOver();
  }
};
const matchLuka = () => {
  if (isTouching(ballRef, lukaRef)) {
    alert("Lukashenko caught you!");
    startOver();
  }
};
fieldRef.addEventListener("click", matchLuka);
fieldRef.addEventListener("click", matchPutin);

function isTouching(a, b) {
  const rect1 = a.getBoundingClientRect();
  const rect2 = b.getBoundingClientRect();
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}
function startOver() {
  contRef.appendChild(img);
  if (Number(counterRef.textContent) > Number(recordRef.textContent)) {
    recordRef.textContent = counterRef.textContent - 1;
  }
  counterRef.textContent = 0;
}
