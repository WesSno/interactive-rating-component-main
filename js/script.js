const ratingCard = document.querySelector("#rating-card");
const numButtons = document.getElementsByTagName("a");
const thanksCard = document.querySelector("#thanks-card");
const submitBtn = document.querySelector(".btn");
const rating = document.querySelector(".rating");
const rateAgain = document.querySelector("#rate-again");

// ADDING THE ACTIVE CLASS TO ALL HYPERLINKS
for (let button of numButtons) {
  // ITERATE THROUGH THE <a> TAGS AND ADD AN EVENTLISTENER TO ALL OF THEM
  button.addEventListener("click", function () {
    for (let items of numButtons) {
      // THIS LOOPS REMOVES THE ACTIVE CLASS FROM A HYPERLINK WHEN ANOTHER HYPERLINK IS CLICKED
      items.classList.remove("active");
    }
    // THIS ADDS THE ACTIVE CLASS TO THE HYPERLINK CLICKED
    button.classList.add("active");
    rating.textContent = button.textContent;
  });
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
