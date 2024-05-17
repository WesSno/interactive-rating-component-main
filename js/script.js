const ratingCard = document.querySelector("#rating-card");
const numButtons = document.getElementsByTagName("a");
const thanksCard = document.querySelector("#thanks-card");
const submitBtn = document.querySelector(".btn");
const rating = document.querySelector(".rating");
const rateAgain = document.querySelector("#rate-again");

// ADDING THE ACTIVE CLASS TO ALL HYPERLINKS
function activeBtn(items) {
  for (let button of numButtons) {
    button.classList.remove("active");
  }
  items.classList.add("active");
  rating.textContent = items.textContent;
}

for (let item of numButtons) {
  item.addEventListener("click", () => activeBtn(item));
  item.addEventListener("touchend", () => activeBtn(item));
}

// SUBMIT BUTTON
submitBtn.addEventListener("click", () => {
  thanksCard.style.display = "block";
  ratingCard.style.display = "none";
});

// RATE AGAIN BUTTON
rateAgain.addEventListener("click", () => {
  for (let button of numButtons) {
    button.classList.remove("active");
  }
  rating.textContent = 5;
  thanksCard.style.display = "none";
  ratingCard.style.display = "block";
});
