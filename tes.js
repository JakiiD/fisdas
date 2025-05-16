const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const nInput = document.getElementById("nInput");
const phiInput = document.getElementById("phiInput");
const timeInput = document.getElementById("timeInput");

const nVal = document.getElementById("nVal");
const phiVal = document.getElementById("phiVal");
const timeVal = document.getElementById("timeVal");
const result = document.getElementById("result");

function updateGGL() {
  const N = parseFloat(nInput.value);
  const phi = parseFloat(phiInput.value);
  const time = parseFloat(timeInput.value);

  const ggl = -(N * (phi / time)).toFixed(2);
  result.textContent = ggl;
  nVal.textContent = N;
  phiVal.textContent = phi;
  timeVal.textContent = time;
}

nInput.addEventListener("input", updateGGL);
phiInput.addEventListener("input", updateGGL);
timeInput.addEventListener("input", updateGGL);

updateGGL();
