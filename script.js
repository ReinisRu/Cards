console.log("App started");

function generate() {
  console.log("Adding listeners");
  document.getElementById("mainContainer");
  // addListeners();
  let clearButton = document.getElementById("clear");
  clearButton.addEventListener("click", onClickClear);
  let submitButton = document.getElementById("create");
  submitButton.addEventListener("click", onClickCreate);
  let resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", function () {
    location.reload();
    console.log("Reset");
  });
}

function onClickClear() {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
  console.log("Cleared");
}

function onClickCreate() {
  onClickClear();
  console.log("Create cards");
  for (let i = 1; i <= 10; i++) {
    let element1 = document.createElement("div");
    element1.classList.add("element");
    element1.textContent = i;
    mainContainer.appendChild(element1);
    let element2 = document.createElement("div");
    element2.classList.add("element");
    element2.textContent = i;
    mainContainer.appendChild(element2);
  }
  let cards = document.querySelectorAll(`#mainContainer div`);

  let last_card = false;
  let game_on = true;
  for (let card of cards) {
    card.addEventListener("click", function () {
      if (game_on === true) {
        if (
          last_card !== false &&
          last_card !== card &&
          last_card.textContent === card.textContent
        ) {
          card.style.background = "lightgreen";
          last_card.style.background = "lightgreen";
          game_on = false;
        }
        last_card = card;
      }
    });
  }
}

generate();
onClickCreate();
